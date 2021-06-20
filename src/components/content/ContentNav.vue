<template>
  <nav>
      <div class="container">
      <ul class="nav-list">
          <li class="nav-item active-item">
              <a href="#" class="item-href">
                  Привилегии
              </a>
          </li>

          <li class="nav-item">
              <a href="#" class="item-href">
                  Игровые товары
              </a>
          </li>

          <li class="nav-item">
              <a href="#" class="item-href">
                  Кейсы
              </a>
          </li>

          <li class="nav-item">
              <a href="#" class="item-href">
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
.active-item a{
    color: #000;
}
</style>