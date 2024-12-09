<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #ffffff}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #ffffff; min-height: 16.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">var obj = JSON.parse($response.body);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">obj = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>"request_date": "2024-12-09T21:26:52Z",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>"request_date_ms": 1733750812,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>"subscriber": {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"entitlements": {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"premium": {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"expires_date": "2025-12-09T21:26:52Z",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"grace_period_expires_date": null,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"product_identifier": "com.neybox.pillow.premium.month",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"purchase_date": "2024-12-09T21:26:52Z"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"first_seen": "2024-12-09T21:26:52Z",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"last_seen": "2024-12-09T21:26:52Z",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"management_url": null,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"non_subscriptions": {},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"original_app_user_id": "YOUR_USER_ID",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"original_application_version": "YOUR_APP_VERSION",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"original_purchase_date": "2024-12-09T21:26:52Z",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"other_purchases": {},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"subscriptions": {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>"com.neybox.pillow.premium.month": {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"billing_issues_detected_at": null,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"expires_date": "2099-12-09T21:26:52Z",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"grace_period_expires_date": null,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"is_sandbox": false,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"original_purchase_date": "2024-12-09T21:26:52Z",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"ownership_type": "PURCHASED",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"period_type": "active",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"purchase_date": "2024-12-09T21:26:52Z",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"store": "app_store",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"unsubscribe_detected_at": "2024-12-09T21:26:52Z"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">$done({ "body": JSON.stringify(obj) });</span></p>
</body>
</html>
