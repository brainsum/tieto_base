<?php

namespace Drupal\tieto_base\Plugin\Alter;

use Drupal\bootstrap\Plugin\Alter\LibraryInfo as BootstrapLibraryInfo;
use Drupal\bootstrap\Annotation\BootstrapAlter;
use Drupal\bootstrap\Bootstrap;
use Drupal\bootstrap\Plugin\PluginBase;
use Drupal\Component\Utility\NestedArray;

/**
 * Implements hook_library_info_alter().
 *
 * @ingroup plugins_alter
 *
 * @BootstrapAlter("library_info")
 */
class LibraryInfo extends BootstrapLibraryInfo {

  /**
   * {@inheritdoc}
   */
  public function alter(&$libraries, &$extension = NULL, &$context2 = NULL) {
    parent::alter($libraries, $extension, $context2);

    if ($extension === 'tieto_base') {
      // Replace core collapse.js with Bootstrap version.
      // @see https://www.drupal.org/node/2840414
      if (isset($libraries['drupal.collapse'])) {
        unset($libraries['drupal.collapse']['js']['/core/misc/collapse.js']);

        $ancestry = $this->theme->getAncestry();
        $replaced = base_path() . $ancestry['bootstrap']->getPath() . '/js/misc/collapse.js';
        $libraries['drupal.collapse']['js'][$replaced] = [];
      }
    }
  }

}
