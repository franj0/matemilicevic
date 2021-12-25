<template>
  <div class="member-box" >
    <b-img :src="img"  />
    <div class="overlay">
        <h4>{{name}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberBox",
  props: ['name', 'img']
}
</script>

<style scoped lang="scss">
    .member-box{
        position: relative;
        width:300px;
        height:300px;
        background: $indigo;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
          object-fit: cover;
          width:300px;
          height:300px;
        }
        .overlay{
          padding:25px 15px;
          position:absolute;
          inset: 0;
          background: rgba(0 ,0, 0, 0.2);
          transition: all 0.3s;
          color:#fff;
          cursor: pointer;
          &:hover{
            background:rgba(0 ,0, 0, 0.6);
          }
        }
    }
</style>