<?php

namespace Drupal\tieto_base\Plugin\Preprocess\Views;

use Drupal\tieto_base\Plugin\Preprocess\PreprocessBase;
use Drupal\bootstrap\Plugin\Preprocess\PreprocessInterface;
use Drupal\bootstrap\Annotation\BootstrapPreprocess;
use Drupal\bootstrap\Utility\Variables;

/**
 * Pre-processes variables for the "views_view" theme hook.
 *
 * @ingroup plugins_preprocess
 *
 * @BootstrapPreprocess("views_view")
 */
class ViewBase extends PreprocessBase implements PreprocessInterface {}
