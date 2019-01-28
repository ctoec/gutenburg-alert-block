<?php
/**
 * Plugin Name: Gutenburg - Alert Block
 * Plugin URI: https://github.com/matthewcrist/gutenburg-alert-block
 * Description: A simple alert block for the Gutenburg editor in Wordpress.
 * Author: matthewcrist
 * Author URI: https://hondo.xyz
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
