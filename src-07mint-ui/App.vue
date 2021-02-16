<template>
    <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    改变大小
    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button size="normal">normal</mt-button>
    禁用按钮
    <mt-button disabled>disabled</mt-button>
    幽灵按钮
    <mt-button plain>plain</mt-button>
    带图标
    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">更多</mt-button>
    自定义图标
    <mt-button>
        <img src="./img/react.png" height="20" width="20" slot="icon">
    </mt-button>
    绑定 click 事件
    <mt-button @click.native="handleClick">点击触发 handleClick</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    name: 'App',
    components: {

    },
    methods:{
        handleClick(){
            Toast('handleClick')
        }
    }
}
</script>

<style scoped>

</style>
