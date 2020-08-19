import { nanoid } from 'nanoid';

import css from './index.css';
import {make} from './helpers';
import ToolboxIcon  from './svg/toolboxIcon.svg';
import RemoveIcon from './svg/removeIcon.svg';
import CheckMark from './svg/checkMark.svg';

/**
 * Plugin for create poll in editor
 */
export default class Poll {
    static get toolbox() {
        return {
            title: 'Poll',
            icon: ToolboxIcon,
        }
    }

    /**
     * Prepare nodes and other default values
     */
    constructor({data, config, api}) {

        this.nodes = {
            wrapper: make('div', this.CSS.wrapper),
            wrapperTitle: make('div', this.CSS.wrapperTitle),
            options: make('div', this.CSS.wrapperOptions),
            settings: make('div', this.CSS.settings)
        }

        this.nodes.wrapper.appendChild(this.nodes.wrapperTitle);
        this.nodes.wrapper.appendChild(this.nodes.options);  
        
        this._data = {
            title: '',
            items: [],
            uid: data.uid || nanoid(13),
            isAnonymous: false,
            isMultiple: false,
        }

        this.data = data;
        this.api = api;
    }

    /**
     * Styles
     * @private
     */
    get CSS() {
        return {
            wrapper: 'cdx-poll',

            wrapperTitle: 'cdx-poll-wrap-title',
            title: 'cdx-poll-title',

            wrapperOptions: 'cdx-poll-wrap-options',
            wrapperOption: 'cdx-poll-wrap-option',
            option: 'cdx-poll-option',

            settings: 'cdx-poll-settings',
            
            wrapperCheckbox: 'cdx-poll-wrap-checkbox',
            checkbox: 'cdx-poll-checkbox',
            pseudoCheckbox: 'cdx-poll-pseudoCheckbox',
            checkboxName: 'cdx-poll-checkbox-name',
            
            removeIcon: 'cdx-poll-remove-icon',
        };
    };

    /**
     * Init method
     */
    render() {
        this.addTitleInput();

        if (this._data.items.length > 0) {
            this._data.items.forEach(item => {
                this.addOptionInput(item);
            });
        } else {
            this.addOptionInput();
        }
        
        this.addSettings();
        return this.nodes.wrapper;
    }

    /**
     * Create UI input
     */
    addOptionInput(item) {
        const options = this.nodes.options.querySelectorAll(`.${this.CSS.option}`);

        if (options.length >= 10 || (options[options.length - 1] && options[options.length - 1].value === '' && !item)) return;

        const wrapper = make('div', this.CSS.wrapperOption)
        const id = item ? item.key : `a${Date.now() / 1000 | 0}${options.length}`;
        const option = make('input', this.CSS.option, {name: id, type:'text', value: item ? item.value : '', placeholder: 'add option', autocomplete: 'off'});

        if (options.length) {
            const removeButton = make('div', this.CSS.removeIcon, {innerHTML: RemoveIcon});
            wrapper.appendChild(removeButton);
            removeButton.addEventListener('click', this.removeSelf.bind(this))
        }

        wrapper.appendChild(option);
        option.addEventListener('blur', this.onBlur.bind(this))
        option.addEventListener('keyup', this.onChangeInput.bind(this))
        option.addEventListener('keydown', this.optionHandler.bind(this))
        
        this.nodes.options.appendChild(wrapper);
    }

    /**
     * Create UI title
     */
    addTitleInput() {
        const title = make('input', this.CSS.title, {name: 'title', value: this._data.title || '', type:'text', placeholder: 'Add title', autocomplete: 'off'});

        title.addEventListener('blur', this.onBlur.bind(this))
        title.addEventListener('keydown', this.titleHandler.bind(this))

        this.nodes.wrapperTitle.appendChild(title);
    }

    /**
     * Create UI checkbox
     */
    addSettings() {
        this.appendCheckBox(this.nodes.settings, {title: 'Multiple choice', name: 'isMultiple'});
        this.appendCheckBox(this.nodes.settings, {title: 'Anonymous poll', name: 'isAnonymous'})

        this.nodes.wrapper.appendChild(this.nodes.settings);
    }
    
     /**
     * Utility method for create checkbox
     */
    appendCheckBox(parentNode, {name, title}) {
        const wrapper = make('label', this.CSS.wrapperCheckbox, {htmlFor: `${name}_${this._data.uid}`});
        const pseudoCheckbox = make('div', this.CSS.pseudoCheckbox, {innerHTML: CheckMark});
        const checkbox = make('input', this.CSS.checkbox, {type: 'checkbox', name, id: `${name}_${this._data.uid}`, checked: this._data[name]})
        const checkboxName = make('div', this.CSS.checkboxName, {innerHTML: title});

        wrapper.appendChild(checkbox);
        wrapper.appendChild(pseudoCheckbox);
        wrapper.appendChild(checkboxName);

        parentNode.appendChild(wrapper);
        checkbox.addEventListener('change', this.checkboxHandler.bind(this));
    }

    /**
     * Called after lose focus on title input
     */
    onBlur({target: {value, name}}) {

        if (name === 'title') {
            this._data[name] = value;
        } else {
            let items = [...this._data.items];
            const isFoundItem = items.find(item => item.key === name);

            if (isFoundItem) {
                if (value) {
                    items = items.map(item => item.key === name ? {...item, value} : item);
                } else {
                    items = items.filter(item => item.key !== name);
                }
            } else {
                items.push({key: name, value})
            }

            this._data.items = items;
        }
    }

    onChangeInput({target: {value}}) {
        if (value !== '') {
            this.addOptionInput();
        }
    }

    /**
     * Called when user typing in option input, and call methods by keys
     */
    optionHandler(event) {
        const BACKSPACE = 8; // key codes

        switch (event.keyCode) {      
            case BACKSPACE:
                this.backspace(event)
                break;
            default: 
                break;
        }
    }

    /**
     * Called when user typing in option input, and call methods by keys
     */
    titleHandler(event) {
        const [ENTER] = [13]; // key codes

        switch (event.keyCode) {      
            case ENTER:
                event.preventDefault();
                event.stopPropagation();
                const options = this.nodes.options.querySelectorAll(`.${this.CSS.option}`);
                options[0].focus()

                break;
            default: 
                break;
        }
    }

    /**
     * Called when checbox changed state, set checkbox state in data 
     */
    checkboxHandler({target: {name, checked}}) {
        this._data[name] = checked;
    }

    /**
     * Called after press BACKSPACE, if option is empty then remove option and change focus on last option
     */
    backspace(event) {
        if (event.target.value === '') {
            event.preventDefault();
            event.stopPropagation();
            this.removeSelf(event);
        }
    }

    /**
     * Remove option from list options
     */
    removeSelf({currentTarget}) {
        const options = this.nodes.options.querySelectorAll(`.${this.CSS.option}`);

        if (options.length === 1) return;

        const indexNode = Array.from(currentTarget.parentNode.parentNode.children).indexOf(currentTarget.parentNode);

        const items = this._data.items.filter((item, index) => index !== indexNode)

        this._data.items = items;

        currentTarget.parentNode.remove()
    }

    /**
     * Stores all Tool's data
     * @private
     *
     * @param {ImageToolData} data
     */
    set data(data) {
        if (Object.values(data).length === 0) return;

        this._data = data;
    }

    /**
     * Return Tool data
     * @private
     */
    get data() {
        return this._data;
    }

    /**
     * Save date for send
     */
    save(blockContent) {
        return this.data;
    }
}