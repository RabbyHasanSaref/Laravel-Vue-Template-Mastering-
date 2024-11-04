<template>
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/admin/dashboard">
                <div class="sidebar-brand-icon rotate-n-15">
                    <img style="width: 60px; height: 60px;" src="https://i.ibb.co.com/DLFYcQS/unnamed.webp" alt="">
                </div>
                <div class="sidebar-brand-text mx-3">School<sup></sup></div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <router-link to="/admin/dashboard" class="nav-link" >
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Students -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseStudents"
                   aria-expanded="false" aria-controls="collapseStudents">
                    <i class="fas fa-user-graduate"></i>
                    <span>Students</span>
                </a>
                <div id="collapseStudents" class="collapse" aria-labelledby="headingStudents" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <router-link to="/admin/all-students" class="collapse-item" >All Students</router-link>
                        <a class="collapse-item" href="">Students Details</a>
                        <a class="collapse-item" href="">Admission Form</a>
                        <a class="collapse-item" href="">Students Promotion</a>
                    </div>
                </div>
            </li>

            <!-- Teachers -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTeachers"
                   aria-expanded="false" aria-controls="collapseTeachers">
                    <i class="fas fa-chalkboard-teacher"></i>
                    <span>Teachers</span>
                </a>
                <div id="collapseTeachers" class="collapse" aria-labelledby="headingTeachers" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="">All Teachers</a>
                        <a class="collapse-item" href="">Teachers Details</a>
                        <a class="collapse-item" href="">Add Teachers</a>
                        <a class="collapse-item" href="">Payments</a>
                    </div>
                </div>
            </li>

            <!-- Parents -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseParents"
                   aria-expanded="false" aria-controls="collapseParents">
                    <i class="fas fa-user-friends"></i>
                    <span>Parents</span>
                </a>
                <div id="collapseParents" class="collapse" aria-labelledby="headingParents" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="">All Parents</a>
                        <a class="collapse-item" href="">Parents Details</a>
                        <a class="collapse-item" href="">Add Parents</a>
                    </div>
                </div>
            </li>

            <!-- Library -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLibrary"
                   aria-expanded="false" aria-controls="collapseLibrary">
                    <i class="fas fa-book"></i>
                    <span>Library</span>
                </a>
                <div id="collapseLibrary" class="collapse" aria-labelledby="headingLibrary" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="">All Books</a>
                        <a class="collapse-item" href="">Add Books</a>
                    </div>
                </div>
            </li>

            <!-- Account -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAccount"
                   aria-expanded="false" aria-controls="collapseAccount">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>Account</span>
                </a>
                <div id="collapseAccount" class="collapse" aria-labelledby="headingAccount" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="">All Fees Collection</a>
                        <a class="collapse-item" href="">Expenses</a>
                        <a class="collapse-item" href="">Add Expenses</a>
                    </div>
                </div>
            </li>

            <!-- Class -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseClass"
                   aria-expanded="false" aria-controls="collapseClass">
                    <i class="fas fa-chalkboard"></i>
                    <span>Class</span>
                </a>
                <div id="collapseClass" class="collapse" aria-labelledby="headingClass" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="">All Classes</a>
                        <a class="collapse-item" href="">Add Classes</a>
                    </div>
                </div>
            </li>

            <!-- Other Sections -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-book-open"></i>
                    <span>Subject</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Class Routine</span>
                </a>
            </li>

            <!-- Exam -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseExam"
                   aria-expanded="false" aria-controls="collapseExam">
                    <i class="fas fa-pencil-alt"></i>
                    <span>Exam</span>
                </a>
                <div id="collapseExam" class="collapse" aria-labelledby="headingExam" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="">Exam Schedule</a>
                        <a class="collapse-item" href="">Exam Grades</a>
                    </div>
                </div>
            </li>

            <!-- Transport -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-bus"></i>
                    <span>Transport</span>
                </a>
            </li>

            <!-- Hostel -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-bed"></i>
                    <span>Hostel</span>
                </a>
            </li>

            <!-- Notice -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-bell"></i>
                    <span>Notice</span>
                </a>
            </li>

            <!-- Message -->
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-comment-dots"></i>
                    <span>Message</span>
                </a>
            </li>

            <!-- Setting -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                   aria-expanded="false" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Setting</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                     data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="">App Setting</a>
                    </div>
                </div>
            </li>
            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>

</template>

<script>
    export default {
        name: "side"
    }
</script>

<style scoped>

</style>