<template>
    <div>
        <div class="editor-wrapper border border-blue-100 dark:border-slate-800">
            <div v-if="editor" class="editor-buttons bg-neutral text-neutral-content">
                <!-- Bold -->
                <div class="tooltip" data-tip="Bold">
                    <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                        <i class="ri-bold"></i> 
                    </button>
                </div>

                <!-- Italic -->
                <div class="tooltip" data-tip="Italic">                
                    <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                        <i class="ri-italic"></i> 
                    </button>
                </div>

                <!-- Strikethrough -->
                <div class="tooltip" data-tip="Strikethrough">                
                    <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
                        <i class="ri-strikethrough"></i> 
                    </button> 
                </div>

                <!-- Clear Format -->
                <div class="tooltip" data-tip="Clear Format">                
                    <button @click="editor.chain().focus().unsetAllMarks().run()">
                        <i class="ri-format-clear"></i> 
                    </button>
                </div>

                <!-- Paragraph -->
                <div class="tooltip" data-tip="Paragraph">                
                    <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
                        <i class="ri-paragraph"></i> 
                    </button>
                </div>

                <!-- H1 -->
                <div class="tooltip" data-tip="H1">                
                    <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                        <i class="ri-h-1"></i> 
                    </button>
                </div>

                <!-- H2 -->
                <div class="tooltip" data-tip="H2">                
                    <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                        <i class="ri-h-2"></i> 
                    </button>
                </div>

                <!-- H3 -->
                <div class="tooltip" data-tip="H3">                
                    <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                        <i class="ri-h-3"></i> 
                    </button>
                </div>

                <!-- Bullet List -->
                <div class="tooltip" data-tip="Bullet List">                
                    <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
                        <i class="ri-list-unordered"></i> 
                    </button>
                </div>

                <!-- Ordered List -->
                <div class="tooltip" data-tip="Ordered List">                
                    <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
                        <i class="ri-list-ordered"></i> 
                    </button>
                </div>

                
                <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
                    <i class="ri-code-view"></i> 
                </button>
                <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
                    <i class="ri-double-quotes-l"></i> 
                </button>
                <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
                    <i class="ri-align-left"></i> 
                </button>
                <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
                    <i class="ri-align-center"></i> 
                </button>
                <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
                    <i class="ri-align-right"></i> 
                </button>
                <button @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
                    <i class="ri-align-justify"></i> 
                </button>
                <button @click="editor.chain().focus().setHorizontalRule().run()">
                    hr
                </button>
                <button @click="editor.chain().focus().setHardBreak().run()">
                    br
                </button>
                <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
                    <i class="ri-arrow-go-back-line"></i> 
                </button>
                <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
                    <i class="ri-arrow-go-forward-line"></i> 
                </button>
                <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
                    <i class="ri-link"></i> 
                </button>
                <button @click="editor.chain().focus().unsetLink().run()" :disabled="!editor.isActive('link')">
                    <i class="ri-link-unlink"></i> 
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
        onUpdate: ({editor}) => {
            console.log(editor.getHTML())
            emit('update:modelValue', editor.getHTML())
            editor.commands.focus()
            
        }
    })
    


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
        @apply p-2 hover:bg-neutral-focus
    }
</style>