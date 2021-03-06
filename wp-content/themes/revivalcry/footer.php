			</section><!-- #page -->
			
		</div><!-- .container -->
		<div class="footer-push"></div>
		</div><!-- .wrapper -->
		
		<?php if (is_page("events")): ?>
			<div id="event-footer">
				<div class="dont-see-dennis">
					<a href="<?php bloginfo('url'); ?>/invite">Don’t see Dennis IN your area? Invite him to come speak at your event or church.</a>
				</div>
				<div class="encourage-box">
					Sign up for our <a href="#footer" class="scroll-to">newsletter</a> or subscribe to our <a href="<?php bloginfo('url'); ?>/events/rss/" type="application/rss+xml"> Events rss feed</a> to be notified about our latest events
				</div>
			</div>
		<?php endif ?>
		
		<div id="page-gradient"></div>
		
		<footer role="contentinfo">
			<div id="footer">
				<section class="span-4" id="mailchimp-signup">
					<h3>Newsletter signup.</h3>
					<!-- Begin MailChimp Signup Form -->
					<div id="mc_embed_signup">
						<form action="http://revivalcry.us2.list-manage.com/subscribe/post?u=6d71c38ad8a27939100932ac7&amp;id=522c3a5cda" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate">
							<div class="mc-field-group">
								<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="email address">
								<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
							</div>
						</form>
					</div>
					<!--End mc_embed_signup-->				
				</section>
				<section class="span-2 prepend-1">
					<h3>Support us.</h3>
					<a href="<?php bloginfo('url'); ?>/give" class="button">Donate</a>
				</section>
				<section class="span-3">
					<h3>Invite a revivalist.</h3>
					<a href="<?php bloginfo('url'); ?>/invite" class="button">Invite</a>
				</section>
				<section class="span-2 connect-with-us last">
					<h3>Connect with us.</h3>
					<a href="http://www.youtube.com/user/RevivalCryMinistries" title="Youtube"><img src="<?php bloginfo('template_directory'); ?>/images/youtube.jpg" width="22" height="22" alt="Youtube"></a>
					<a href="http://www.twitter.com/revivalcry" title="Twitter"><img src="<?php bloginfo('template_directory'); ?>/images/twitter.jpg" width="22" height="22" alt="Twitter"></a>
					<a href="http://www.facebook.com/pages/Dennis-ReanierRevival-Cry-Ministries/142374032476285" title="Facebook"><img src="<?php bloginfo('template_directory'); ?>/images/facebook.jpg" width="22" height="22" alt="Facebook"></a>
				</section>
			</div><!-- #footer -->

			<div id="site-info">
				&copy;<?php echo date ('Y'); ?>
				<a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"> <?php bloginfo( 'name' ); ?> Ministries.</a> 406-522-7107 | 
				<a href="<?php bloginfo('url'); ?>/privacy-policy">Privacy Policy</a>.   
				<a href="<?php bloginfo('url'); ?>/terms-conditions">Terms &amp; Conditions</a>.
				<?php if (is_page("store")): ?>
					<a href="<?php bloginfo('url'); ?>/shipping-returns-policy">Shipping &amp; Returns Policy</a>.
				<?php endif; ?>
			</div><!-- #site-info -->
		</footer>

<?php wp_footer(); ?>
  <!-- scripts concatenated and minified via ant build script-->
	<script src="<?php bloginfo ('template_directory'); ?>/js/plugins.js"></script>
	<script src="<?php bloginfo ('template_directory'); ?>/js/script.js"></script>
	</body>
</html>
