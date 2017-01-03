<?php

namespace Drupal\tieto_base\Plugin\Preprocess;

use Drupal\tieto_base\TietoBase;
use Drupal\bootstrap\Plugin\Preprocess\Page as BootstrapPage;
use Drupal\bootstrap\Annotation\BootstrapPreprocess;
use Drupal\bootstrap\Utility\Variables;

/**
 * Pre-processes variables for the "page" theme hook.
 *
 * @ingroup plugins_preprocess
 *
 * @BootstrapPreprocess("page")
 */
class Page extends BootstrapPage {

  /**
   * {@inheritdoc}
   */
  public function preprocessVariables(Variables $variables) {
    parent::preprocessVariables($variables);

    $variables->is_admin_route = TietoBase::isAdminRoute();
  }

}
