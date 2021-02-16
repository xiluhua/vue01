<template>

    <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
        <label>
            <input type="checkbox" v-model="todo.complete"/>
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="delItem">删除</button>
    </li>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: Object,
        index: Number
    },
    data(){ // 必须写函数
        return{
            bgColor: 'white', // 默认的背景颜色
            isShow: false   // 按钮默认是否显示
        }
    },
    methods:{
        handleEnter(isEnter){
            if (isEnter){
                this.bgColor = '#686';
                this.isShow = true
            }else {
                this.bgColor = 'white';
                this.isShow = false
            }
        },
        delItem(){
            const {todo, index} = this
            if (window.confirm(`确认要删除${todo.title}吗？`)){
                // delTodo(index)
                this.$store.dispatch('delTodo', index)
            }
        }
    }
}
</script>

<style scoped>
.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}


/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

/*li label {*/
/*    float: left;*/
/*    cursor: pointer;*/
/*}*/

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

</style>
