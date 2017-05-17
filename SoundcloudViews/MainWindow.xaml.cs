using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using CefSharp;
using MahApps.Metro.Controls;
using System.Threading;
using System.Diagnostics;
using System.IO;

namespace SoundcloudViews
{
    /// <summary>
    /// Soundcloud Views made easy...
    /// </summary>
    public partial class MainWindow : MetroWindow
    {
        
        //Instance for requestHandler
        private RequestHandler requestHandler;

        //Default Browser URL
        string defaultSongUrl = "https://soundcloud-views.tk";

        bool isStartPage = true;

        //Async Task Cancellation
        CancellationTokenSource tokenSource = new CancellationTokenSource();

        //Is the Rotation running?
        bool automationrunning = false;

        //Fields Digga
        int automatedPlays = 0;
        int maxPlaysNumber = 500;

        //Cookie Disclaimer clickEvent
        bool firstStart = true;

        //Proxy Management
        string currentproxyaddress;
        //string currentportaddress;

        #region //DOM LOADED
        public class RenderProcessMessageHandler : IRenderProcessMessageHandler
        {

            void IRenderProcessMessageHandler.OnFocusedNodeChanged(IWebBrowser browserControl, IBrowser browser, IFrame frame, IDomNode node)
            {
                var message = node == null ? "lost focus" : node.ToString();

                Trace.WriteLine("OnFocusedNodeChanged() - " + message);
            }

            void IRenderProcessMessageHandler.OnContextCreated(IWebBrowser browserControl, IBrowser browser, IFrame frame)
            {
                //const string script = "document.addEventListener('DOMContentLoaded', function(){ alert('DomLoaded'); });";

                //frame.ExecuteJavaScriptAsync(script);
                Trace.WriteLine("DOM is loaded");
            }

            void IRenderProcessMessageHandler.OnContextReleased(IWebBrowser browserControl, IBrowser browser, IFrame frame)
            {

            }

        }
        #endregion

        #region //Initialize Browser
        /// <summary>
        /// Cef Settings
        /// </summary>
        public static void startBrowser()
        {
            //Cef.RegisterWidevineCdm(@".\WidevineCdm");

            // Specify Global Settings and Command Line Arguments
            var settings = new CefSettings();

            //Multithread
            settings.MultiThreadedMessageLoop = true;


            //Setting the User Agent here for Startup, you can change the User Agent per Request via requesthandler
            //settings.UserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4";
            //settings.UserAgent = "Mozilla/5.0 (Linux; Android 7.0; Pixel C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Safari/537.36";
            //settings.UserAgent = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
            settings.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36";
            //settings.UserAgent = "Mozilla / 5.0(Linux; Android 5.0.2; SAMSUNG SM-T550 Build / LRX22G) AppleWebKit / 537.36(KHTML, like Gecko) SamsungBrowser / 3.3 Chrome / 38.0.2125.102 Safari / 537.36";


            string cachefolder = "data/cache";

            Directory.Delete(cachefolder, true);

            //settings.CachePath = "data/cache";

            settings.PersistSessionCookies = false;
            settings.RemoteDebuggingPort = 8080;
            settings.CommandLineArgsDisabled = false;
            //settings.CefCommandLineArgs.Add("enable-logging", "1");
            //settings.LogSeverity = LogSeverity.Verbose;

            //settings.CefCommandLineArgs.Add("enable-system-flash", "1");
            settings.CefCommandLineArgs.Add("enable-media-stream", "1");
            settings.CefCommandLineArgs.Add("allow-running-insecure-content", "1");

            CefSharp.Cef.Initialize(settings);
            Trace.WriteLine("►►► SETTINGS LOADED ◄◄◄");

        }
        #endregion

        #region //MAIN BRAIN FUCK
        public MainWindow()
        {

            startBrowser();
            InitializeComponent();

            requestHandler = new RequestHandler();
            Browser.RequestHandler = requestHandler;

            Browser.RenderProcessMessageHandler = new RenderProcessMessageHandler();
            Browser.RequestContext = new RequestContext(new RequestContextSettings { CachePath = "data/cache" });

            Browser.LoadingStateChanged += OnLoadingStateChanged;

            Browser.Address = defaultSongUrl;
            SoundcloudViewsInput.Text = defaultSongUrl;

            firstStart = true;


            Browser.MenuHandler = new MenuHandler();


            //Mainframe finished loading
            Browser.FrameLoadEnd += (sender, args) =>
            {

                    //Wait for the MainFrame to finish loading
                    if (args.Frame.IsMain)
                    {
                        if(isStartPage == true)
                        args.Frame.ExecuteJavaScriptAsync("document.body.style.overflow = 'hidden'");

                        Trace.WriteLine("►►► MAINFRAME LOADED ◄◄◄");

                        closeCookie();
                    }
                
            };

            Count.Content = automatedPlays;

           

        }
        #endregion

        #region //Play generation
        private async void genPlaysButton_Click(object sender, RoutedEventArgs e)
        {
            //Dispose the Cancellation Token and Start again
            tokenSource.Dispose(); // Clean up old token source....
            tokenSource = new CancellationTokenSource(); // "Reset" the cancellation token source...

            await PutTaskDelay();
        }

        async Task PutTaskDelay()
        {
            maxPlaysNumber = 500;
            int timebetweenPlays = 33000;

            try
            {

                for (int i = 1; i <= maxPlaysNumber; i++)
                {
                    automationrunning = true;
                    automatedPlays++;
                    loadSongUrl();
                    Count.Content = automatedPlays;
                    await Task.Delay(timebetweenPlays, tokenSource.Token);
                }

            }


            //Catch me if you can

            catch (TaskCanceledException)

            {
                Trace.WriteLine("- We cancelled my quest, fucker! -");
                automationrunning = false;
                automatedPlays = 0;
                Trace.WriteLine("AUTOMATION RUNNING = " + automationrunning + automatedPlays);


            }

            catch (Exception)

            {


            }
        }

        private void genPlaysCancel_Click(object sender, RoutedEventArgs e)
        {
            tokenSource.Cancel(true);
        }

        private void loadSongUrl()
        {
            currentproxyaddress = "direct://";

            isStartPage = false;

            Cef.UIThreadTaskFactory.StartNew(delegate
            {
                var rc = Browser.GetBrowser().GetHost().RequestContext;
                var v = new Dictionary<string, object>();
                v["mode"] = "fixed_servers";
                v["server"] = currentproxyaddress; //+ ":" + currentportaddress; 
                string error;
                bool success = rc.SetPreference("proxy", v, out error);
                rc.GetAllPreferences(true);
                Trace.WriteLine("Loading with NO PROXY over " + currentproxyaddress);               
            });
 

        //populate Browser Address and reload the goatcanon
        Browser.Load(SoundcloudViewsInput.Text);
        }

        private void SoundcloudViewsInput_TextChanged(object sender, TextChangedEventArgs e)
        {
           //Browser.Address = SoundcloudViewsInput.Text;
        }

        private void UrlKeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Return)
            {
                loadSongUrl();
            }
        }


        #endregion

        #region //Cookie Disclaimer

        private void closeCookie()
        {
            if (firstStart == true)
            {
                string closeCookie = "document.getElementsByClassName('announcement__dismiss')[0].click();";
                Browser.GetMainFrame().ExecuteJavaScriptAsync(closeCookie);
                Browser.GetMainFrame().ExecuteJavaScriptAsync(closeCookie);
                firstStart = false;
            }
        }

        #endregion

        #region //Loading State

        private void OnLoadingStateChanged(object sender, LoadingStateChangedEventArgs args)
        {
            Trace.WriteLine("LOADING");
        }

        #endregion

        #region //Menuhandler - YOU CAN ADJUST THE FUCKING MENU HERE
        private class MenuHandler : IContextMenuHandler
        {
            public void OnBeforeContextMenu(IWebBrowser browserControl, IBrowser browser, IFrame frame, IContextMenuParams parameters, IMenuModel model)
            {
                model.Clear();

            }

            public bool OnContextMenuCommand(IWebBrowser browserControl, IBrowser browser, IFrame frame, IContextMenuParams parameters, CefMenuCommand commandId, CefEventFlags eventFlags)
            {
                return false;
            }

            public void OnContextMenuDismissed(IWebBrowser browserControl, IBrowser browser, IFrame frame)
            {
                //var chromiumWebBrowser = (ChromiumWebBrowser)browserControl;

                //chromiumWebBrowser.Dispatcher.Invoke(() =>
                //{
                //    chromiumWebBrowser.ContextMenu = null;
                //});
            }

            public bool RunContextMenu(IWebBrowser browserControl, IBrowser browser, IFrame frame, IContextMenuParams parameters, IMenuModel model, IRunContextMenuCallback callback)
            {
                return false;

                //var chromiumWebBrowser = (ChromiumWebBrowser)browserControl;

                ////IMenuModel is only valid in the context of this method, so need to read the values before invoking on the UI thread
                //var menuItems = GetMenuItems(model);

                //chromiumWebBrowser.Dispatcher.Invoke(() =>
                //{
                //    var menu = new ContextMenu
                //    {
                //        IsOpen = true
                //    };

                //    RoutedEventHandler handler = null;

                //    handler = (s, e) =>
                //    {
                //        menu.Closed -= handler;

                //        //If the callback has been disposed then it's already been executed
                //        //so don't call Cancel
                //        if(!callback.IsDisposed)
                //        { 
                //            callback.Cancel();
                //        }
                //    };

                //    menu.Closed += handler;

                //    foreach (var item in menuItems)
                //    {
                //        menu.Items.Add(new MenuItem
                //        {
                //            Header = item.Item1,
                //            Command = new RelayCommand(() => { callback.Continue(item.Item2, CefEventFlags.None); })
                //        });
                //    }
                //    chromiumWebBrowser.ContextMenu = menu;
                //});

                //return true;
            }

            private static IEnumerable<Tuple<string, CefMenuCommand>> GetMenuItems(IMenuModel model)
            {
                var list = new List<Tuple<string, CefMenuCommand>>();
                for (var i = 0; i < model.Count; i++)
                {
                    var header = model.GetLabelAt(i);
                    var commandId = model.GetCommandIdAt(i);
                    list.Add(new Tuple<string, CefMenuCommand>(header, commandId));
                }

                return list;
            }
        }

        #endregion

        #region //DEBUG
        private void goHome(object sender, RoutedEventArgs e)
        {
            //Browser.Address = "chrome://version";
            Browser.ShowDevTools();
        }

        #endregion


    }
}
