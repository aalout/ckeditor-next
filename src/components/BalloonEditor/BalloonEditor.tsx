'use client'

import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
	BalloonEditor,
	AccessibilityHelp,
	AutoLink,
	Autosave,
	Bold,
	Essentials,
	Italic,
	Link,
	Paragraph,
	SelectAll,
	Undo
} from 'ckeditor5';
import styles from './styles.module.css'
import translations from 'ckeditor5/translations/ru.js';


import 'ckeditor5/ckeditor5.css';

export default function BalloonEditorExample() {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const editorConfig = {
		toolbar: {
			items: ['undo', 'redo', '|', 'bold', 'italic', '|', 'link'],
			shouldNotGroupWhenFull: false
		},
		plugins: [AccessibilityHelp, AutoLink, Autosave, Bold, Essentials, Italic, Link, Paragraph, SelectAll, Undo],
        fontFamily: {
			supportAllValues: true
		},
		initialData:
			'asdasdasdasdasda',
		language: 'ru',
		placeholder: 'Здесь контент',
		translations: [translations]
	};

	return (
		<div>
			<div className={styles.initial}>
				<div className={styles.editorContainer} ref={editorContainerRef}>
					<div className={styles.editorContainerEditor}>
						<div ref={editorRef}>{isLayoutReady && <CKEditor editor={BalloonEditor} config={editorConfig} />}</div>
					</div>
				</div>
			</div>
		</div>
	);
}