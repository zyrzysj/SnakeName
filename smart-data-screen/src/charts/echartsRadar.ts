import type { ComposeOption } from 'echarts/core'
import { RadarComponent, TooltipComponent } from 'echarts/components'
import type { RadarComponentOption, TooltipComponentOption } from 'echarts/components'
import { RadarChart } from 'echarts/charts'
import type { RadarSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import * as echarts from 'echarts/core'

export type RadarChartOption = ComposeOption<
  RadarComponentOption | TooltipComponentOption | RadarSeriesOption
>

echarts.use([RadarComponent, TooltipComponent, RadarChart, CanvasRenderer])

export { echarts }
