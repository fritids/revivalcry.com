<?php get_header(); ?>
		<div class="full-width-white">
			<div id="content-container" class="span-7 prepend-1">
				<section id="content" role="main">
	
	<?php if ( have_posts() ) : ?>
					<h1 class="page-title"><?php printf( __( 'Search Results for: %s', 'twentyten' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
					<?php get_template_part( 'loop', 'blog-layout' ); ?>
	<?php else : ?>
					<div id="post-0" class="post no-results not-found">
						<h2 class="entry-title"><?php _e( 'Nothing Found', 'twentyten' ); ?></h2>
						<div class="entry-content">
							<p><?php _e( 'Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'twentyten' ); ?></p>
							<?php get_search_form(); ?>
						</div><!-- .entry-content -->
					</div><!-- #post-0 -->
	<?php endif; ?>
				</section><!-- #content -->
			</div><!-- #content-container -->
<?php get_sidebar(); ?>
			<div class="clear"></div>
		</div><!-- .full-width-white -->
<?php get_footer(); ?>
