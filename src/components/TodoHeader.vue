<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认"
              v-model="title" @keyup.enter="addItem" style="padding: 4px 7px;"/>
    </div>
</template>

<script>
export default {
    name: 'TodoHeader',
    // props: {
    //     addTodo: Function
    // },
    data(){ // 必须写函数
        return{
            title: ''
        }
    },
    methods:{
        addItem(){
            // 1. 检查输入的合法性
            const title = this.title.trim()
            if (!title){
                alert("请输入title")
                return
            }
            // 2. 封装对象
            const todo = {
                title: title,
                complete: false
            }
            // 3. 添加到 todos
            // this.addTodo(todo)
            this.$store.dispatch('addTodo', todo)
            // 4. 清空
            this.title = ''
        }
    }
}
</script>

<style scoped>
input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>
