import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"primary" | "ghost" | "dashed" | "link" | "text" | "default">;
        default: string;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    info: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"primary" | "ghost" | "dashed" | "link" | "text" | "default">;
        default: string;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    info: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    type: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
    success: boolean;
    warning: boolean;
    info: boolean;
}>;
export default _default;
