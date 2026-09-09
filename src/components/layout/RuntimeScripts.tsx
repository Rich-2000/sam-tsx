import { pageCode } from '../../content/pageCode.js';
export function RuntimeScripts() {
    return (<>
      <script src="/vendor/jquery.js" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
      <script src="/vendor/webflow.js" type="text/javascript"></script>
      <script dangerouslySetInnerHTML={{ __html: pageCode.mobileMenuBehavior }}/>
      {"\n"}
      <script dangerouslySetInnerHTML={{ __html: pageCode.flowRuntimeLoader }}/>
      {" \n"}
      <script dangerouslySetInnerHTML={{ __html: pageCode.desktopScrollReset }}/>
      <script src="/vendor/swiper.js"></script>
      {"\n"}
      <script dangerouslySetInnerHTML={{ __html: pageCode.carouselBehavior }}/>
      {"\n\n"}
    </>);
}
