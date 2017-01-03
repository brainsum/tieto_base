<?php

namespace Drupal\tieto_base;

use Drupal\bootstrap\Bootstrap;

/**
 * The primary class for Tieto Base theme.
 *
 * Provides helper methods.
 *
 * @ingroup utility
 */
class TietoBase extends Bootstrap {

  /**
   * Gets the Symfony route object.
   *
   * @return \Symfony\Component\Routing\Route
   */
  public static function getRouteObject() {
    return \Drupal::routeMatch()->getRouteObject();
  }

  /**
   * Returns whether the current route is admin or not.
   *
   * @return boolean
   */
  public static function isAdminRoute() {
    /** @var \Symfony\Component\Routing\Route $route */
    $route = self::getRouteObject();
    return (bool) \Drupal::service('router.admin_context')->isAdminRoute($route);
  }

}
