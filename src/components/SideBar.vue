<template>
     <div id="wrapper">

      <!-- Sidebar -->
      <ul class="sidebar navbar-nav">
        <li class="nav-item">
          <a class="nav-link" >
            <i class="fas fa-fw fa-tachometer-alt" style="color: green;"></i>
            <span><router-link to="/">Dashboard</router-link></span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link">
            <i class="fas fa-fw fa-folder" style="color: green;"></i>
            <span><router-link to="/pages">Pages</router-link></span>
          </a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="fas fa-fw fa-chart-area" style="color: green;"></i>
            <span><router-link to="/charts">Charts</router-link></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <i class="fas fa-fw fa-table" style="color: green;"></i>
            <span><router-link to="/tables">Tables</router-link></span></a>
        </li>
      </ul>

      <router-view></router-view>
    
      <!-- /.content-wrapper -->

    </div>
</template>

<script>

import Home from './Home'

export default {
    name: 'SideBar',

    components: {
        Home,
    }
}
</script>

<style>

</style>
