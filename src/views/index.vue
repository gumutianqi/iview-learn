<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
                </h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button type="ghost" @click="modal1 = true">Start iView</Button>
                </h2>
                <Modal
                    v-model="modal1"
                    title="普通的Modal对话框标题"
                    @on-ok="ok"
                    @on-cancel="cancel">
                    <p>对话框内容</p>
                    <p>对话框内容</p>
                    <p>对话框内容</p>
                </Modal>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            };
        },
        methods: {
            ok () {
                this.$router.push({path: '/portal'});
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    };
</script>