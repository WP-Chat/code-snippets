<?php
/**
 * Unregisters all block patterns from WordPress core.
 *
 * @package wpchat
 * @source https://github.com/tomdevisser/tomdevisser-theme/blob/main/inc/theme-setup.php
 */
function wpchat_block_course_theme_unregister_patterns() {
	remove_theme_support( 'core-block-patterns' );
}
add_action( 'after_setup_theme', 'wpchat_block_course_theme_unregister_patterns', 15 );
