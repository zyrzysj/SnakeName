import type { ComposeOption } from 'echarts/core'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import type {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import type { LineSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import * as echarts from 'echarts/core'

export type LineChartOption = ComposeOption<
  GridComponentOption | LegendComponentOption | TooltipComponentOption | LineSeriesOption
>

echarts.use([GridComponent, LegendComponent, TooltipComponent, LineChart, CanvasRenderer])

export { echarts }
