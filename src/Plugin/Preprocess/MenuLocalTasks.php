<?php

namespace Drupal\tieto_base\Plugin\Preprocess;

use Drupal\bootstrap\Plugin\Preprocess\PreprocessBase;
use Drupal\bootstrap\Plugin\Preprocess\PreprocessInterface;
use Drupal\bootstrap\Annotation\BootstrapPreprocess;
use Drupal\bootstrap\Utility\Element;
use Drupal\bootstrap\Utility\Variables;

/**
 * Pre-processes variables for the "menu_local_tasks" theme hook.
 *
 * @ingroup plugins_preprocess
 *
 * @BootstrapPreprocess("menu_local_tasks")
 */
class MenuLocalTasks extends PreprocessBase implements PreprocessInterface {

  /**
   * {@inheritdoc}
   */
  public function preprocessElement(Element $element, Variables $variables) {
    // kint($element);
  }

}
