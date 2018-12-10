//
//  RCTInAppBrowser.m
//  RCTInAppBrowser
//
//  Created by Kanzaki Mirai on 11/16/15.
//  Copyright © 2015 DickyT. All rights reserved.
//

#import "RCTInAppBrowser.h"

#import "SVModalWebViewController.h"

@implementation WebViewModal

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showWebViewWithURL:(NSString *)url)
{
    UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
    
    SVModalWebViewController *webViewController = [[SVModalWebViewController alloc] initWithAddress:url];
    webViewController.modalPresentationStyle = UIModalPresentationPageSheet;
    [rootViewController presentViewController:webViewController animated:YES completion:NULL];
}

@end