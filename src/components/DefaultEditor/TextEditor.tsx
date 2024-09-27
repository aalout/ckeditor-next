// components/custom-editor.js
'use client' // only in App Router

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import styles from './styles.module.css'

import 'ckeditor5/ckeditor5.css';

function CustomEditor() {
    return (
        <div className={styles.default}>
            <div id='default'>
            <CKEditor
            editor={ ClassicEditor }
            config={ {
                toolbar: {
                    items: [ 'undo', 'redo', '|', 'bold', 'italic' ],
                },
                plugins: [
                    Bold, Essentials, Italic, Mention, Paragraph, Undo
                ],
                initialData: '<p>Контент тут</p>'
            } }
        />
        </div>
        </div>
    );
}

export default CustomEditor;
