import { pageCode } from '../../content/pageCode.js'
export function PageSetup() {
  return (
    <div className="global_custom-code w-embed">
      <link rel="stylesheet" href="/styles/flow-custom.css" />
      {'\n'}
      <link rel="stylesheet" href="/styles/maddy-theme.css" />
      {'\n\n'}
      {'\n'}
      <style dangerouslySetInnerHTML={{ __html: pageCode.responsiveTypeStyles }} />
      {'\n\n'}
      {'\n'}
      {'\n'}
      <style dangerouslySetInnerHTML={{ __html: pageCode.utilityStyles }} />
      {'\n'}
      <style dangerouslySetInnerHTML={{ __html: pageCode.designerDebugStyles }} />
      {'\n'}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '.w-webflow-badge{display:none!important}.flex-target{align-items:flex-start}.flex-target h3{flex:1 1 auto;min-width:0;overflow:visible;white-space:normal;overflow-wrap:break-word;letter-spacing:-.06rem;line-height:1.15}.drop-wrap,.drop-sub{overflow:visible}',
        }}
      />
      {'\n'}
      {'\n'}
      <meta name="format-detection" content="telephone=no" />
      {'\n'}
      {'\n'}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    </div>
  )
}
