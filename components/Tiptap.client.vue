<template>
    <div>
        <div v-if="editor">
            <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                <span class="material-symbols-outlined">format_bold</span>
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                <span class="material-symbols-outlined">format_italic</span>
            </button>
            <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
                <span class="material-symbols-outlined">format_strikethrough</span>
            </button>            
            <button @click="editor.chain().focus().unsetAllMarks().run()">
                <span class="material-symbols-outlined">format_clear</span>
            </button>
            <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
                paragraph
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                h1
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                h2
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                h3
            </button>
            <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
                <span class="material-symbols-outlined">format_list_bulleted</span>
            </button>
            <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
                <span class="material-symbols-outlined">format_list_numbered</span>
            </button>
            <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
                <span class="material-symbols-outlined">code</span>
            </button>
            <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
                <span class="material-symbols-outlined">format_quote</span>
            </button>
            <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
                <span class="material-symbols-outlined">format_align_left</span>
            </button>
            <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
                <span class="material-symbols-outlined">format_align_center</span>
            </button>
            <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
                <span class="material-symbols-outlined">format_align_right</span>
            </button>
            <button @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
                <span class="material-symbols-outlined">format_align_justify</span>
            </button>
            <button @click="editor.chain().focus().setHorizontalRule().run()">
                hr
            </button>
            <button @click="editor.chain().focus().setHardBreak().run()">
                br
            </button>
            <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
                <span class="material-symbols-outlined">undo</span>
            </button>
            <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
                <span class="material-symbols-outlined">redo</span>
            </button>
        </div>
        <editor-content :editor="editor" />
    </div>
</template>
<script setup lang="ts">
    import StarterKit from '@tiptap/starter-kit'
    import TextAlign from '@tiptap/extension-text-align'
    import { useEditor, EditorContent } from '@tiptap/vue-3'

    const editor = useEditor({
        content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
        extensions: [
            StarterKit,
            TextAlign.configure({
            types: ['heading', 'paragraph'],
            }),
        ],
        editorProps: {
            attributes: {
            class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
            },
        },
    })
</script>