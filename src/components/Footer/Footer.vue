<template>
    <div class="footer-container">
        <b-container fluid>
            <b-row>
                <b-col class="bg-secondary">
                    <b-button-group>
                        <b-button class="social-button btn-primary-outline">
                            <b-icon icon="facebook" class="social-icon bg-dark" scale="1"></b-icon>
                        </b-button>
                        <b-button class="social-button btn-primary-outline">
                            <b-icon icon="instagram" class="social-icon bg-dark" scale="1"></b-icon>
                        </b-button>
                        <b-button class="social-button btn-primary-outline">
                            <b-icon icon="youtube" class="social-icon bg-dark" scale="1"></b-icon>
                        </b-button>
                    </b-button-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer-container{
        position: fixed;
        width: 100%;
        bottom:0;
        /*position: relative;*/
    }
    .social-button{
        margin:0 30px;
        background: transparent;
        border:0;
        outline:0;
    }
</style>
