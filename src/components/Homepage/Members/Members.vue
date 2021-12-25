<template>
    <div id="mm-members">
        <h1>Members</h1>
        <div class="members-container">
            <member-box name="Mile Ivicevic"
                        :img="require('../../../assets/mate-milicevic-avatar.jpg')" />
          <member-box name="MATE MILICEVIC"
                        :img="require('../../../assets/mate-milicevic-avatar.jpg')" />
          <member-box name="Lorena Neka"
                        :img="require('../../../assets/mate-milicevic-avatar.jpg')" />
        </div>
    </div>
</template>

<script>
    import MemberBox from "./MemberBox";
    export default {
        name: "Members",
        components: {
          'member-box': MemberBox,
        },
    }
</script>

<style scoped lang="scss">
    #mm-members{
        background:$russian-violet; color:#fff;
        padding:100px 0;
      h1{
        margin-bottom:40px;
      }
      .members-container{
            display:flex;
            justify-content: center;
            align-items:center;
          flex-wrap:wrap;
            gap:25px;

        }
    }
</style>
