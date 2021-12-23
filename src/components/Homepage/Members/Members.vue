<template>
    <div id="mm-members">
        <h1>Members</h1>
        <div class="members-container">
            <div class="member-box">Mate Milicevic</div>
            <div class="member-box">Mile Ivicevic</div>
            <div class="member-box">Lorena Neka</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Members"
    }
</script>

<style scoped lang="scss">
    #mm-members{
        background:black; color:#fff;
        .members-container{
            padding:75px 0;
            background: #00f;
            display:flex;
            justify-content: center;
            align-items:center;
            gap:25px;
            .member-box{
                width:300px;
                height:300px;
                background: red;
                display:flex;
                justify-content:center;
                align-items:center;
            }
        }
    }
</style>
