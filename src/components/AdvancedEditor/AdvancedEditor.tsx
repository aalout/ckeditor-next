'use client'

import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
	ClassicEditor,
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

import translations from 'ckeditor5/translations/ru.js';

import 'ckeditor5/ckeditor5.css';

import styles from './styles.module.css'

export default function AdvancedExample() {
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
		initialData:
			'Контент здесь',
		language: 'ru',
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
		},
		menuBar: {
			isVisible: true
		},
		placeholder: 'Type or paste your content here!',
		translations: [translations]
	};

	return (
		<div>
			<div className={styles.initial}>
				<div className={styles.editorContainer} ref={editorContainerRef}>
					<div className={styles.editorContainerEditor}>
						<div ref={editorRef}>{isLayoutReady && <CKEditor editor={ClassicEditor} config={editorConfig} />}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
