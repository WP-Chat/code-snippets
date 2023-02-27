<?php
/**
 * Allows SVG uploads.
 *
 * @param array $t Mime types keyed by the file extension regex corresponding to those types.
 * @package wpchat
 * @source https://github.com/tomdevisser/tomdevisser-theme/blob/main/inc/theme-setup.php
 */
function wpchat_mime_types( $t ) {
	$t['svg'] = 'image/svg+xml';
	return $t;
}
add_filter( 'upload_mimes', 'wpchat_mime_types' );
