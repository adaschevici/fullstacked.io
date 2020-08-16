import React from 'react'
import { storiesOf } from '@storybook/react'
import addons from '@storybook/addons'
import { withKnobs } from '@storybook/addon-knobs'

import ModeSelect from '../../storybook-knobs'
import Image from '.'

const fluid = {
  aspectRatio: 1.5151515151515151,
  sizes: '(max-width: 800px) 100vw, 800px',
  src: '/static/29512859f6db0e9d44ba495b593c2dce/14b42/webexpo.jpg',
  srcSet:
    '/static/29512859f6db0e9d44ba495b593c2dce/f836f/webexpo.jpg 200w,↵/static/29512859f6db0e9d44ba495b593c2dce/2244e/webexpo.jpg 400w,↵/static/29512859f6db0e9d44ba495b593c2dce/14b42/webexpo.jpg 800w,↵/static/29512859f6db0e9d44ba495b593c2dce/47498/webexpo.jpg 1200w,↵/static/29512859f6db0e9d44ba495b593c2dce/0e329/webexpo.jpg 1600w,↵/static/29512859f6db0e9d44ba495b593c2dce/51350/webexpo.jpg 1848w',
  tracedSVG:
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='265'%20viewBox='0%200%20400%20265'%20preserveAspectRatio='none'%3e%3cpath%20d='M97%202l1%204c1%202%201%202-2%202h-3l3%201%202%201h-2l-2%201v1l5%201%2012%203c17%203%2020%206%206%205-10-1-8%200%203%202%208%201%2010%202%2013%205l3%201%2012%203%2017%203c8%201%2019%204%2019%205l-13-1-11-1a226%20226%200%2001-29-4l-2%201v19l1%2021c1%202%200%2028-2%2029h-23c-12-1-15-2-11-3%203-1%203-4%200-5-2%200-2-1-2-16l-1-17c-3-3-3-1-3%209v11c0%202-2%201-2-1l-4-6c-3-4-3-4-4-2-2%202-1%207%201%209%201%201%201%201%201-1%202-4%204-2%203%203v11c-2%200-5-4-4-5v-5c-3%200-5-3-5-6s0-3-2-3c-1%201-2%200-3-1-3-5-6-7-5-2v5l-1%204-2%203-1%205c0%203%200%203-4%202l-4%201c0%202%201%202%202%202l3%201%204%201%203%201H52l-4-1-4-1h-7l-14-1a592%20592%200%2001-4%201c2%200%202%200%202%203-1%204%201%207%203%207l3-3c-2-1%201-6%203-5l23%204a5055%205055%200%200137%207c-4%201-7%202-15%201H64l1%204c0%204%200%204-1%201%200-5-2-5-2%200%200%203%200%204-2%204s-2-1-2-4l-1-4-1-2-9-1c-11%201-13%202-10%207l2%204%201%201c0%201-7%201-18-1-6%200-6-1-3-3%203-3%203-6%200-5l-3%201-4%201c-3%200-4%200-4%202H6c-3-1-2-4%202-4%203-1%204-4%201-5l-1%201c0%202-1%202-3%200-1-1-1-1-3%201s-2%203-2%2034l1%2034v8l-1%2043v37h10l-1-24c0-50%200-78%202-79%202-2%204%200%204%203%200%208%200%2013%201%2012s1%200%201%203%200%204%201%202a83%2083%200%20012-14c1-2%201-3%203-2l1-2c0-2%200-3%208-3l22-1c1-1%2010%203%2010%204l-1%201%201%202c2%201%203%202%203%204%200%203%201%205%203%205l1%205v11c-2%200-1%202%202%203%202%201%205%200%203-2l1-1%202%203%203%202%204%201%203%201%201-1c2%200%204%203%204%206l1%204-1%204-2%208-1%204c-1%200-2-2-2-8l-2-8%201%2029v28h66l65-1a550%20550%200%20017-50v-3l3%202c2%202%202%203%202%206v6h-4l1%201%201%202%201%201c3-1%205%200%207%203l2%203-2%201c-2%200-2%200%200%201%201%201%201%201-2%202l-4%204c0%202-1%204-3%204l-2%201h2c2%201%203%204%200%204-1%200-2%200-2%202l1%202c2%200%202%201%201%205-1%202-1%203-2%202l-2-1c-2%202%203%203%2020%203h19l1-5c0-5%200-8-2-14-2-9-3-11-1-11h2l-1-1c-2-1-2-4%200-6%202-3%2022%200%2023%203l-1%201-1-1-1-1-2%201-2%201-2%202-4%207-3%203c-3%203-3%203-2%207v5c-1%200-1%201%201%204l2%204c-1%201%2011%201%2065%201h66l-1-86V0H248C105%200%2097%200%2097%202M86%2033v7l-1%203-1-2-2-3c-2-2-2-2-2%201l-1%204-1%206c-3%207-3%207%202%207%203%200%203%200%203%202v2l2-2c0-3%208-6%208-3l2%201c2%200%202-21-1-21h-2l-2-4c0-2-1-3-2-3-2%200-2%201-2%205m174%201c-5%201-9%203-10%205v2l-3%203-3%205-1%206v13l1%203%201%204c1%202%200%204-2%204s-1%203%202%204c2%200%203%201%204%203%202%203%203%204%205%204%207%200%205%204-3%207-6%202-14%209-13%2012l-1%202-2%202h2v5l-1%204-1%201-1-3v-2l-1%202-1%205v2l1-2c1-2%201-2%201%200v4a354%20354%200%20001%2020c0-18%202-25%209-34l4-8%201-4-2%202c-2%201-3%204-3%205-1%202-1%203-2%202s-1-1-1%201l-2%201%201-3v-3h1l2-3c2-4%206-7%206-4h3c2-2%202-2%202%201l1%203v-2l1-2%201-1%204-1c7%200%2021-6%2023-10l3-2c3%200%207-7%207-14s-2-16-5-21c-1-4-11-14-10-11l1%204c-2-2-4-3-4-1h-2c-4-4-7-5-8-4h-4l-5%201-4%201c0-2%204-4%207-4%205-1%2011-4%207-4h-7m45%2050l-2%206c0%204-1%204-5%200-3-4-5-4-5%201%201%202%201%203-1%203-4-2-6-2-6-1l2%202c2%201%200%203-2%202-3%200-5%202-3%203l2%202%204%202%203%202h-1c-3-1-2%201%201%204%202%202%203%204%203%207%201%205%202%205%208%205%208-2%209-2%207-12s-2-12-1-11l1-1-1-2-1-7c-1-7-1-8-3-5M199%2094v4c0%202-1%203-3%201-1-2-3%200-4%204-1%205%201%209%208%2017%205%205%2010%2017%2010%2023h1c1-1%200-3-1-7-2-7-2-7%200-7%206-2%2010-4%209-6l-2-6c-2-9-3-11-5-12s-2-1%200-5l2-4c0-2-3-1-4%201-2%204-2%204-4%201-3-3-7-5-7-4M69%20116c0%203%200%204-2%204h-2a303%20303%200%200047%201c0-2-15-4-16-2l-3%201h-3l3-1%204-2h-5l-4-2-8-1-8-1-1-1c-2%200-2%201-2%204m112%2051l-4%202-13%202c-11%203-17%205-16%207s-4%203-10%203c-3%200-4%200-3%201%202%201%2011%203%2029%204%2012%202%2015%202%2020%205l5%202%205-2a1035%201035%200%200030-1l1%207%201%207%201-5%203-13c2-11%203-13%201-13-1%200-2%201-2%204%200%204-1%206-1%201%200-2%200-2-1-1h-1v-2l-1%201h-1c-1-1-10-4-18-5-6%200-9-2-10-3-1-2-13-2-15-1m162%2016l-10%204-10%202c-11%201-14%204-12%209%200%202%201%202%207%202%2016%200%2023%201%2026%204s6%204%206%203h1l1-1%201-2%202-3c1-2%202-3%2011-5%2015-4%2015-5%200-8l-13-4c-4-2-7-2-10-1m-325%206l-1%2021-1%2022v33h9l-1-4-1-5c-2-1-2-23%200-24%202%200%201-16%200-16-2%200-2-2-2-9%200-9-2-20-3-18'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
}

const channel = addons.getChannel()

channel.addListener('storybookjs/knobs/change', ({ value }) =>
  channel.emit('DARK_MODE', value)
)

storiesOf('Elements/Image', module)
  .addDecorator(withKnobs)
  .add('Hero Gallery Image', () => {
    return (
      <div style={{ position: 'relative', width: '300px', height: '300px' }}>
        <ModeSelect channel={channel} />
        <Image width="350px" fluid={fluid} />
      </div>
    )
  })
