<?php include 'header.php'; ?>
<section class="knowledge-category">
    <div class="container">
        <div class="knowledge-category-heading">
            CHUYÊN MỤC: KIẾN THỨC
        </div>
        <div class="knowledge-category-wrap">
            <div class="row">
                <div class="col-lg-9">
                    <div class="knowledge-category-newfeed">
                        <div class="row">
                            <?php include 'knowledge-item.php'; ?>
                            <?php include 'knowledge-item.php'; ?>
                            <?php include 'knowledge-item.php'; ?>
                            <?php include 'knowledge-item.php'; ?>
                            <?php include 'knowledge-item.php'; ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="post-sidebar-wrap">
                        <div class="category-sidebar">
                            <div class="sidebar-haeding">Danh mục</div>
                            <div class="sidebar-list">
                                <div class="sidebar-item sidebar-item-active">
                                    <a href="" class=" sidebar-iten-link">
                                        kiến thức
                                        <span> (2)</span>
                                    </a>
                                </div>
                                <div class="sidebar-item">
                                    <a href="" class=" sidebar-iten-link">
                                        kiến thức thẻ tín dụng
                                        <span> (4)</span>
                                    </a>
                                </div>
                                <div class="sidebar-item">
                                    <a href="" class=" sidebar-iten-link">
                                        kiến thức vay tiền nhanh
                                        <span> (4)</span>
                                    </a>
                                </div>
                                <div class="sidebar-item">
                                    <a href="" class=" sidebar-iten-link">
                                        Tin tức
                                        <span> (4)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="see-sidebar">
                            <div class="sidebar-haeding">Xem nhiều</div>
                            <div class="see-sidebar-wrap">
                                <?php include 'category-sidebar.php'; ?>
                                <?php include 'category-sidebar.php'; ?>
                                <?php include 'category-sidebar.php'; ?>
                                <?php include 'category-sidebar.php'; ?>
                                <?php include 'category-sidebar.php'; ?>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
<?php include 'footer.php'; ?>