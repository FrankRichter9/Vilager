<template>
  <nav>
      <div class="container">
      <ul class="nav-list">
          <li class="nav-item"
            :class="{active_item: active === 'privel'}"
          >
              <a href="#" class="item-href"
                @click.prevent="active = 'privel'; $emit('display', 'privel');"
              >
                  Привилегии
              </a>
          </li>

          <li class="nav-item"
            :class="{active_item: active === 'game'}"
          >
              <a href="#" class="item-href"
                @click.prevent="active = 'game'; $emit('display', 'game');"
              >
                  Игровые товары
              </a>
          </li>

          <li class="nav-item"
            :class="{active_item: active === 'case'}"
          >
              <a href="#" class="item-href"
                @click.prevent="active = 'case'"
              >
                  Кейсы
              </a>
          </li>

          <li class="nav-item"
            :class="{active_item: active === 'any'}"
          >
              <a href="#" class="item-href"
                @click.prevent="active = 'any'"
              >
                  Разное
              </a>
          </li>
      </ul>
      </div>
  </nav>
</template>

<script>

export default {
    name: 'ContentNav',
    data(){
        return{
            active: 'privel'
        }
    }
}

</script>

<style scoped>
.nav-list{
    list-style: none;

    display: flex;

    box-sizing: border-box;
    padding: 60px 0 0 0;
    margin: 0 0 0 13%;

    
}

.nav-item{
    margin: 0 3.5% 0 0;
}

.item-href{
    text-decoration: none;

    font-family: Gilroy-Bold;
    font-size: 42px;

    color: #929292;
}
.active_item a{
    color: #000;
}

@media screen and (max-width: 1024px) {
  .item-href{
    font-size: 26px;
  }

  .nav-list{
    overflow-x: scroll;
  }
}
</style>