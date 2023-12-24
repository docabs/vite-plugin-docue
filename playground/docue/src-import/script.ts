import { defineComponent } from 'docuejs'
import SrcImportStyle from './srcImportStyle.docue'
import SrcImportStyle2 from './srcImportStyle2.docue'
import SrcImportModuleStyle from './srcImportModuleStyle.docue'
import SrcImportModuleStyle2 from './srcImportModuleStyle2.docue'

export default defineComponent({
  components: {
    SrcImportStyle,
    SrcImportStyle2,
    SrcImportModuleStyle,
    SrcImportModuleStyle2,
  },
  setup() {
    return {
      msg: 'hello from script src!',
    }
  },
})
