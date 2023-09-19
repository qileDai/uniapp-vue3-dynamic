import { showToast } from '@/utils/messageTip';
import { apiSelectType } from '@/utils/types';
import { nextTick, onBeforeMount, ref } from 'vue';
import { baseSelecCheck, defaultValueCheck, FormItem } from '../schema';
export default function useIndex(props: { formItem: FormItem }, emit: Function) {
    // 输入框的值
    const selectValue = ref<defaultValueCheck>('');
    return {
        selectValue
    };
}
