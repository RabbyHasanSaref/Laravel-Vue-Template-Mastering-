<template>
    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <!-- Sidebar -->
        <sidenavCompo></sidenavCompo>
        <!-- End of Sidebar -->

        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <topnav></topnav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                <router-view></router-view>
                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
           <footerCompo></footerCompo>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->
</template>

<script>


    import topnav from "./Components/topnavComponents";
    import footerCompo from "./Components/footerComponents";
    import sidenavCompo from "./Components/sidenavComponents";
    export default {
        name: "App",
        components: {
            sidenavCompo,
            topnav,
            footerCompo

        },

        mounted() {

        },

    };
</script>

<style scoped>

</style>
