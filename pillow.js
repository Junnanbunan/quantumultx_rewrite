var obj = JSON.parse($response.body);

obj = {
  "request_date": "2024-12-09T21:48:26Z",
  "request_date_ms": 1733752106000,
  "subscriber": {
    "entitlements": {
      "premium": {
        "expires_date": "2025-12-09T21:48:26Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.neybox.pillow.premium.month",
        "purchase_date": "2024-12-09T21:48:26Z"
      }
    },
    "first_seen": "2024-12-09T21:48:26Z",
    "last_seen": "2024-12-09T21:48:26Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "YOUR_USER_ID",
    "original_application_version": "YOUR_APP_VERSION",
    "original_purchase_date": "2024-12-09T21:48:26Z",
    "other_purchases": {},
    "subscriptions": {
      "com.neybox.pillow.premium.month": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-09T21:48:26Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2024-12-09T21:48:26Z",
        "ownership_type": "PURCHASED",
        "period_type": "active",
        "purchase_date": "2024-12-09T21:48:26Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2024-12-09T21:48:26Z"
      }
    }
  }
};

$done({ "body": JSON.stringify(obj) });
