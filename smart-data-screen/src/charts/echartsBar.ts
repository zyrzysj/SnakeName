import type { ComposeOption } from 'echarts/core'
import { GridComponent, TooltipComponent } from 'echarts/components'
import type { GridComponentOption, TooltipComponentOption } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import type { BarSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import * as echarts from 'echarts/core'

export type BarChartOption = ComposeOption<
  GridComponentOption | TooltipComponentOption | BarSeriesOption
>

echarts.use([GridComponent, TooltipComponent, BarChart, CanvasRenderer])

export { echarts }
