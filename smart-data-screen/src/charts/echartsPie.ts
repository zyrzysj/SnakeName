import type { ComposeOption } from 'echarts/core'
import { LegendComponent, TooltipComponent } from 'echarts/components'
import type { LegendComponentOption, TooltipComponentOption } from 'echarts/components'
import { PieChart } from 'echarts/charts'
import type { PieSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import * as echarts from 'echarts/core'

export type PieChartOption = ComposeOption<
  LegendComponentOption | TooltipComponentOption | PieSeriesOption
>

echarts.use([LegendComponent, TooltipComponent, PieChart, CanvasRenderer])

export { echarts }
