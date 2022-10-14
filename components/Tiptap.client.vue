<template>
    <div>
        <div class="editor-wrapper border border-blue-100 dark:border-slate-800 rounded">
            <div v-if="editor" class="editor-buttons bg-slate-300 dark:bg-slate-800 flex items-center py-1 flex-wrap">
                <!-- Bold -->                
                <button type="button" title="Bold" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus('end').toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                    <i class="ri-bold"></i> 
                </button>

                <!-- Italic -->                               
                <button type="button" title="Italic" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                    <i class="ri-italic"></i> 
                </button>

                <!-- Strikethrough -->
                <button type="button" title="Strikehtrough" @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
                    <i class="ri-strikethrough"></i> 
                </button>                 

                <!-- Clear Format -->
                <button type="button" title="Clear Format" @click="editor.chain().focus().unsetAllMarks().run()">
                    <i class="ri-format-clear"></i> 
                </button>

                <div class="w-[1px] h-6 bg-neutral-content"></div>
                
                <!-- Paragraph -->                
                <button type="button" title="Paragraph" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
                    <i class="ri-paragraph"></i> 
                </button>

                <!-- H1 -->                
                <button type="button" title="Heading 1" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                    <i class="ri-h-1"></i> 
                </button>

                <!-- H2 -->                
                <button type="button" title="Heading 2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                    <i class="ri-h-2"></i> 
                </button>

                <!-- H3 -->                
                <button type="button" title="Heading 3" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                    <i class="ri-h-3"></i> 
                </button>

                <!-- Bullet List -->                
                <button type="button" title="Unordered List" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
                    <i class="ri-list-unordered"></i> 
                </button>

                <!-- Ordered List -->                                
                <button type="button" title="Ordered List" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
                    <i class="ri-list-ordered"></i> 
                </button>
                
                <!-- Code Block -->
                <button type="button" title="Code Block" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
                    <i class="ri-terminal-box-fill"></i> 
                </button>

                <!-- Blockquote -->
                <button type="button" title="Blockquote" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
                    <i class="ri-double-quotes-l"></i> 
                </button>

                <!-- Align Left -->
                <button type="button" title="Align Left" @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
                    <i class="ri-align-left"></i> 
                </button>

                <!-- Align Center -->
                <button type="button" title="Align Center" @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
                    <i class="ri-align-center"></i> 
                </button>

                <!-- Align Right -->
                <button type="button" title="Align Right" @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
                    <i class="ri-align-right"></i> 
                </button>

                <!-- Align Justify -->
                <button type="button" title="Align Justify" @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
                    <i class="ri-align-justify"></i> 
                </button>
                
                <div class="w-[1px] h-6 bg-neutral-content"></div>

                <!-- Horizontal Rule -->
                <button type="button" title="Horizontal Rule" @click="editor.chain().focus().setHorizontalRule().run()">
                    <i class="ri-separator"></i>
                </button>

                <!-- Line Break -->
                <button type="button" title="Line Break" @click="editor.chain().focus().setHardBreak().run()">
                    <i class="ri-text-wrap"></i>
                </button>

                <!-- Set Link -->
                <button type="button" title="Set Link" @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
                    <i class="ri-link"></i> 
                </button>

                <!-- Unset Link -->
                <button type="button" title="Unset Link" @click="editor.chain().focus().unsetLink().run()" :disabled="!editor.isActive('link')">
                    <i class="ri-link-unlink"></i> 
                </button>
                
                <div class="w-[1px] h-6 bg-neutral-content"></div>

                <!-- Undo -->
                <button type="button" title="Undo" @click="editor.chain().undo().focus().run()" :disabled="!editor.can().undo()">
                    <i class="ri-arrow-go-back-line"></i> 
                </button>

                <!-- Redo -->
                <button type="button" title="Redo" @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
                    <i class="ri-arrow-go-forward-line"></i> 
                </button>
            </div>
            <editor-content :editor="editor" />
        </div>
    </div>
</template>
<script setup lang="ts">
    import StarterKit from '@tiptap/starter-kit'
    import TextAlign from '@tiptap/extension-text-align'
    import Link from '@tiptap/extension-link'
    import { useEditor, EditorContent } from '@tiptap/vue-3'
    import 'remixicon/fonts/remixicon.css'
    
    const props = defineProps<{
        modelValue: string,
    }>()
    const { modelValue } = toRefs(props)
    const emit = defineEmits(['update:modelValue'])  


   // watch(modelValue, (value) => {
   //     const isSame = editor.value.getHTML() === value
   //     if (isSame) {
   //         return editor.value.commands.focus()
   //     }
   //     editor.value.commands.setContent(value, false)    
   //})
    
    const editor = useEditor({
        content: modelValue.value,
        extensions: [
            StarterKit,
            Link,
            TextAlign.configure({
            types: ['heading', 'paragraph'],
            }),
        ],
        editorProps: {
            attributes: {
            class: 'prose prose-sm sm:prose lg:prose-lg m-5 focus:outline-none',
            },
        },
        onBlur: () => {
            //emit('update:modelValue', editor.getHTML())
            testEmit()
        }
    })    
    
    const testEmit = () => {        
        emit('update:modelValue', editor.value.getHTML())
    }    

    const setLink = () => {
      const previousUrl = editor.value.getAttributes('link').href
      const url = window.prompt('URL', previousUrl)

      // cancelled
      if (url === null) {
        return
      }

      // empty
      if (url === '') {
        editor.value
          .chain()
          .focus()
          .extendMarkRange('link')
          .unsetLink()
          .run()

        return
      }

      // update link
      editor.value
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()        
    }

</script>

<style scoped>
    .editor-buttons button {
        @apply p-1 hover:bg-neutral-focus w-7 h-7 flex items-center justify-center rounded mx-1
    }

    button.is-active {
        @apply bg-neutral-focus text-neutral-content
    }
</style>