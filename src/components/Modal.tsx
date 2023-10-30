import { BaseSyntheticEvent } from "react";
import {
    FormState,
    FieldValues,
    FieldError,
    ErrorOption,
    SubmitHandler,
    SubmitErrorHandler,
    FieldArrayPath,
    FieldArray,
    Field,
    FieldErrors,
    RegisterOptions,
    UseFormRegisterReturn,
} from "react-hook-form";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Form } from "./ui/form";
import { Input } from "./ui/input";

export default function Modal({
    open,
    setOpen,
    title,
    description,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    description: string;
}) {
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <Form
                    children={undefined}
                    watch={{}}
                    getValues={{}}
                    getFieldState={function <TFieldName extends string>(
                        name: TFieldName,
                        formState?: FormState<FieldValues> | undefined
                    ): {
                        invalid: boolean;
                        isDirty: boolean;
                        isTouched: boolean;
                        error?: FieldError | undefined;
                    } {
                        throw new Error("Function not implemented.");
                    }}
                    setError={function (
                        name: string,
                        error: ErrorOption,
                        options?: { shouldFocus: boolean } | undefined
                    ): void {
                        throw new Error("Function not implemented.");
                    }}
                    clearErrors={function (
                        name?: string | string[] | readonly string[] | undefined
                    ): void {
                        throw new Error("Function not implemented.");
                    }}
                    setValue={function <TFieldName extends string = string>(
                        name: TFieldName,
                        value: TFieldName extends `${infer K}.${infer R}`
                            ? K extends string
                                ? R extends string
                                    ? R extends `${infer K}.${infer R}`
                                        ? K extends string | number | symbol
                                            ? R extends string
                                                ? R extends `${infer K}.${infer R}`
                                                    ? K extends
                                                          | string
                                                          | number
                                                          | symbol
                                                        ? R extends string
                                                            ? R extends `${infer K}.${infer R}`
                                                                ? K extends
                                                                      | string
                                                                      | number
                                                                      | symbol
                                                                    ? R extends string
                                                                        ? R extends `${infer K}.${infer R}`
                                                                            ? K extends
                                                                                  | string
                                                                                  | number
                                                                                  | symbol
                                                                                ? R extends string
                                                                                    ? R extends `${infer K}.${infer R}`
                                                                                        ? K extends
                                                                                              | string
                                                                                              | number
                                                                                              | symbol
                                                                                            ? R extends string
                                                                                                ? R extends `${infer K}.${infer R}`
                                                                                                    ? K extends
                                                                                                          | string
                                                                                                          | number
                                                                                                          | symbol
                                                                                                        ? R extends string
                                                                                                            ? R extends `${infer K}.${infer R}`
                                                                                                                ? K extends
                                                                                                                      | string
                                                                                                                      | number
                                                                                                                      | symbol
                                                                                                                    ? R extends string
                                                                                                                        ? R extends `${infer K}.${infer R}`
                                                                                                                            ? K extends
                                                                                                                                  | string
                                                                                                                                  | number
                                                                                                                                  | symbol
                                                                                                                                ? R extends string
                                                                                                                                    ? R extends `${infer K}.${infer R}`
                                                                                                                                        ? K extends
                                                                                                                                              | string
                                                                                                                                              | number
                                                                                                                                              | symbol
                                                                                                                                            ? R extends string
                                                                                                                                                ? R extends `${infer K}.${infer R}`
                                                                                                                                                    ? K extends
                                                                                                                                                          | string
                                                                                                                                                          | number
                                                                                                                                                          | symbol
                                                                                                                                                        ? R extends string
                                                                                                                                                            ? any
                                                                                                                                                            : never
                                                                                                                                                        : K extends `${number}`
                                                                                                                                                        ? never
                                                                                                                                                        : never
                                                                                                                                                    : R extends
                                                                                                                                                          | string
                                                                                                                                                          | number
                                                                                                                                                          | symbol
                                                                                                                                                    ? any
                                                                                                                                                    : R extends `${number}`
                                                                                                                                                    ? unknown
                                                                                                                                                    : never
                                                                                                                                                : never
                                                                                                                                            : K extends `${number}`
                                                                                                                                            ? never
                                                                                                                                            : never
                                                                                                                                        : R extends
                                                                                                                                              | string
                                                                                                                                              | number
                                                                                                                                              | symbol
                                                                                                                                        ? any
                                                                                                                                        : R extends `${number}`
                                                                                                                                        ? unknown
                                                                                                                                        : never
                                                                                                                                    : never
                                                                                                                                : K extends `${number}`
                                                                                                                                ? never
                                                                                                                                : never
                                                                                                                            : R extends
                                                                                                                                  | string
                                                                                                                                  | number
                                                                                                                                  | symbol
                                                                                                                            ? any
                                                                                                                            : R extends `${number}`
                                                                                                                            ? unknown
                                                                                                                            : never
                                                                                                                        : never
                                                                                                                    : K extends `${number}`
                                                                                                                    ? never
                                                                                                                    : never
                                                                                                                : R extends
                                                                                                                      | string
                                                                                                                      | number
                                                                                                                      | symbol
                                                                                                                ? any
                                                                                                                : R extends `${number}`
                                                                                                                ? unknown
                                                                                                                : never
                                                                                                            : never
                                                                                                        : K extends `${number}`
                                                                                                        ? never
                                                                                                        : never
                                                                                                    : R extends
                                                                                                          | string
                                                                                                          | number
                                                                                                          | symbol
                                                                                                    ? any
                                                                                                    : R extends `${number}`
                                                                                                    ? unknown
                                                                                                    : never
                                                                                                : never
                                                                                            : K extends `${number}`
                                                                                            ? never
                                                                                            : never
                                                                                        : R extends
                                                                                              | string
                                                                                              | number
                                                                                              | symbol
                                                                                        ? any
                                                                                        : R extends `${number}`
                                                                                        ? unknown
                                                                                        : never
                                                                                    : never
                                                                                : K extends `${number}`
                                                                                ? never
                                                                                : never
                                                                            : R extends
                                                                                  | string
                                                                                  | number
                                                                                  | symbol
                                                                            ? any
                                                                            : R extends `${number}`
                                                                            ? unknown
                                                                            : never
                                                                        : never
                                                                    : K extends `${number}`
                                                                    ? never
                                                                    : never
                                                                : R extends
                                                                      | string
                                                                      | number
                                                                      | symbol
                                                                ? any
                                                                : R extends `${number}`
                                                                ? unknown
                                                                : never
                                                            : never
                                                        : K extends `${number}`
                                                        ? never
                                                        : never
                                                    : R extends
                                                          | string
                                                          | number
                                                          | symbol
                                                    ? any
                                                    : R extends `${number}`
                                                    ? unknown
                                                    : never
                                                : never
                                            : K extends `${number}`
                                            ? never
                                            : never
                                        : R extends string | number | symbol
                                        ? any
                                        : R extends `${number}`
                                        ? unknown
                                        : never
                                    : never
                                : K extends `${number}`
                                ? never
                                : never
                            : TFieldName extends string
                            ? any
                            : TFieldName extends `${number}`
                            ? never
                            : never,
                        options?:
                            | Partial<{
                                  shouldValidate: boolean;
                                  shouldDirty: boolean;
                                  shouldTouch: boolean;
                              }>
                            | undefined
                    ): void {
                        throw new Error("Function not implemented.");
                    }}
                    trigger={function (
                        name?:
                            | string
                            | string[]
                            | readonly string[]
                            | undefined,
                        options?: Partial<{ shouldFocus: boolean }> | undefined
                    ): Promise<boolean> {
                        throw new Error("Function not implemented.");
                    }}
                    formState={{
                        isDirty: false,
                        isLoading: false,
                        isSubmitted: false,
                        isSubmitSuccessful: false,
                        isSubmitting: false,
                        isValidating: false,
                        isValid: false,
                        submitCount: 0,
                        defaultValues: undefined,
                        dirtyFields: undefined,
                        touchedFields: undefined,
                        errors: undefined,
                    }}
                    resetField={function <TFieldName extends string = string>(
                        name: TFieldName,
                        options?:
                            | Partial<{
                                  keepDirty: boolean;
                                  keepTouched: boolean;
                                  keepError: boolean;
                                  defaultValue: TFieldName extends `${infer K}.${infer R}`
                                      ? K extends string
                                          ? R extends string
                                              ? R extends `${infer K}.${infer R}`
                                                  ? K extends
                                                        | string
                                                        | number
                                                        | symbol
                                                      ? R extends string
                                                          ? R extends `${infer K}.${infer R}`
                                                              ? K extends
                                                                    | string
                                                                    | number
                                                                    | symbol
                                                                  ? R extends string
                                                                      ? R extends `${infer K}.${infer R}`
                                                                          ? K extends
                                                                                | string
                                                                                | number
                                                                                | symbol
                                                                              ? R extends string
                                                                                  ? R extends `${infer K}.${infer R}`
                                                                                      ? K extends
                                                                                            | string
                                                                                            | number
                                                                                            | symbol
                                                                                          ? R extends string
                                                                                              ? R extends `${infer K}.${infer R}`
                                                                                                  ? K extends
                                                                                                        | string
                                                                                                        | number
                                                                                                        | symbol
                                                                                                      ? R extends string
                                                                                                          ? R extends `${infer K}.${infer R}`
                                                                                                              ? K extends
                                                                                                                    | string
                                                                                                                    | number
                                                                                                                    | symbol
                                                                                                                  ? R extends string
                                                                                                                      ? R extends `${infer K}.${infer R}`
                                                                                                                          ? K extends
                                                                                                                                | string
                                                                                                                                | number
                                                                                                                                | symbol
                                                                                                                              ? R extends string
                                                                                                                                  ? R extends `${infer K}.${infer R}`
                                                                                                                                      ? K extends
                                                                                                                                            | string
                                                                                                                                            | number
                                                                                                                                            | symbol
                                                                                                                                          ? R extends string
                                                                                                                                              ? R extends `${infer K}.${infer R}`
                                                                                                                                                  ? K extends
                                                                                                                                                        | string
                                                                                                                                                        | number
                                                                                                                                                        | symbol
                                                                                                                                                      ? R extends string
                                                                                                                                                          ? R extends `${infer K}.${infer R}`
                                                                                                                                                              ? K extends
                                                                                                                                                                    | string
                                                                                                                                                                    | number
                                                                                                                                                                    | symbol
                                                                                                                                                                  ? R extends string
                                                                                                                                                                      ? any
                                                                                                                                                                      : never
                                                                                                                                                                  : K extends `${number}`
                                                                                                                                                                  ? never
                                                                                                                                                                  : never
                                                                                                                                                              : R extends
                                                                                                                                                                    | string
                                                                                                                                                                    | number
                                                                                                                                                                    | symbol
                                                                                                                                                              ? any
                                                                                                                                                              : R extends `${number}`
                                                                                                                                                              ? unknown
                                                                                                                                                              : never
                                                                                                                                                          : never
                                                                                                                                                      : K extends `${number}`
                                                                                                                                                      ? never
                                                                                                                                                      : never
                                                                                                                                                  : R extends
                                                                                                                                                        | string
                                                                                                                                                        | number
                                                                                                                                                        | symbol
                                                                                                                                                  ? any
                                                                                                                                                  : R extends `${number}`
                                                                                                                                                  ? unknown
                                                                                                                                                  : never
                                                                                                                                              : never
                                                                                                                                          : K extends `${number}`
                                                                                                                                          ? never
                                                                                                                                          : never
                                                                                                                                      : R extends
                                                                                                                                            | string
                                                                                                                                            | number
                                                                                                                                            | symbol
                                                                                                                                      ? any
                                                                                                                                      : R extends `${number}`
                                                                                                                                      ? unknown
                                                                                                                                      : never
                                                                                                                                  : never
                                                                                                                              : K extends `${number}`
                                                                                                                              ? never
                                                                                                                              : never
                                                                                                                          : R extends
                                                                                                                                | string
                                                                                                                                | number
                                                                                                                                | symbol
                                                                                                                          ? any
                                                                                                                          : R extends `${number}`
                                                                                                                          ? unknown
                                                                                                                          : never
                                                                                                                      : never
                                                                                                                  : K extends `${number}`
                                                                                                                  ? never
                                                                                                                  : never
                                                                                                              : R extends
                                                                                                                    | string
                                                                                                                    | number
                                                                                                                    | symbol
                                                                                                              ? any
                                                                                                              : R extends `${number}`
                                                                                                              ? unknown
                                                                                                              : never
                                                                                                          : never
                                                                                                      : K extends `${number}`
                                                                                                      ? never
                                                                                                      : never
                                                                                                  : R extends
                                                                                                        | string
                                                                                                        | number
                                                                                                        | symbol
                                                                                                  ? any
                                                                                                  : R extends `${number}`
                                                                                                  ? unknown
                                                                                                  : never
                                                                                              : never
                                                                                          : K extends `${number}`
                                                                                          ? never
                                                                                          : never
                                                                                      : R extends
                                                                                            | string
                                                                                            | number
                                                                                            | symbol
                                                                                      ? any
                                                                                      : R extends `${number}`
                                                                                      ? unknown
                                                                                      : never
                                                                                  : never
                                                                              : K extends `${number}`
                                                                              ? never
                                                                              : never
                                                                          : R extends
                                                                                | string
                                                                                | number
                                                                                | symbol
                                                                          ? any
                                                                          : R extends `${number}`
                                                                          ? unknown
                                                                          : never
                                                                      : never
                                                                  : K extends `${number}`
                                                                  ? never
                                                                  : never
                                                              : R extends
                                                                    | string
                                                                    | number
                                                                    | symbol
                                                              ? any
                                                              : R extends `${number}`
                                                              ? unknown
                                                              : never
                                                          : never
                                                      : K extends `${number}`
                                                      ? never
                                                      : never
                                                  : R extends
                                                        | string
                                                        | number
                                                        | symbol
                                                  ? any
                                                  : R extends `${number}`
                                                  ? unknown
                                                  : never
                                              : never
                                          : K extends `${number}`
                                          ? never
                                          : never
                                      : TFieldName extends string
                                      ? any
                                      : TFieldName extends `${number}`
                                      ? never
                                      : never;
                              }>
                            | undefined
                    ): void {
                        throw new Error("Function not implemented.");
                    }}
                    reset={function (
                        values?:
                            | FieldValues
                            | { [x: string]: any }
                            | ((formValues: FieldValues) => FieldValues)
                            | undefined,
                        keepStateOptions?:
                            | Partial<{
                                  keepDirtyValues: boolean;
                                  keepErrors: boolean;
                                  keepDirty: boolean;
                                  keepValues: boolean;
                                  keepDefaultValues: boolean;
                                  keepIsSubmitted: boolean;
                                  keepIsSubmitSuccessful: boolean;
                                  keepTouched: boolean;
                                  keepIsValid: boolean;
                                  keepSubmitCount: boolean;
                              }>
                            | undefined
                    ): void {
                        throw new Error("Function not implemented.");
                    }}
                    handleSubmit={function (
                        onValid: SubmitHandler<FieldValues>,
                        onInvalid?: SubmitErrorHandler<FieldValues> | undefined
                    ): (
                        e?: BaseSyntheticEvent<object, any, any> | undefined
                    ) => Promise<void> {
                        throw new Error("Function not implemented.");
                    }}
                    unregister={function (
                        name?:
                            | string
                            | string[]
                            | readonly string[]
                            | undefined,
                        options?:
                            | (Omit<
                                  Partial<{
                                      keepDirtyValues: boolean;
                                      keepErrors: boolean;
                                      keepDirty: boolean;
                                      keepValues: boolean;
                                      keepDefaultValues: boolean;
                                      keepIsSubmitted: boolean;
                                      keepIsSubmitSuccessful: boolean;
                                      keepTouched: boolean;
                                      keepIsValid: boolean;
                                      keepSubmitCount: boolean;
                                  }>,
                                  | "keepIsSubmitted"
                                  | "keepSubmitCount"
                                  | "keepValues"
                                  | "keepDefaultValues"
                                  | "keepErrors"
                              > & {
                                  keepValue?: boolean | undefined;
                                  keepDefaultValue?: boolean | undefined;
                                  keepError?: boolean | undefined;
                              })
                            | undefined
                    ): void {
                        throw new Error("Function not implemented.");
                    }}
                    control={{
                        _subjects: {
                            values: undefined,
                            array: undefined,
                            state: undefined,
                        },
                        _removeUnmounted: function (): void {
                            throw new Error("Function not implemented.");
                        },
                        _names: {
                            mount: undefined,
                            unMount: undefined,
                            array: undefined,
                            watch: undefined,
                            focus: undefined,
                            watchAll: undefined,
                        },
                        _state: {
                            mount: false,
                            action: false,
                            watch: false,
                        },
                        _reset: function (
                            values?:
                                | FieldValues
                                | { [x: string]: any }
                                | ((formValues: FieldValues) => FieldValues)
                                | undefined,
                            keepStateOptions?:
                                | Partial<{
                                      keepDirtyValues: boolean;
                                      keepErrors: boolean;
                                      keepDirty: boolean;
                                      keepValues: boolean;
                                      keepDefaultValues: boolean;
                                      keepIsSubmitted: boolean;
                                      keepIsSubmitSuccessful: boolean;
                                      keepTouched: boolean;
                                      keepIsValid: boolean;
                                      keepSubmitCount: boolean;
                                  }>
                                | undefined
                        ): void {
                            throw new Error("Function not implemented.");
                        },
                        _options: undefined,
                        _getDirty: function <TName extends string, TData>(
                            name?: TName | undefined,
                            data?: TData | undefined
                        ): boolean {
                            throw new Error("Function not implemented.");
                        },
                        _resetDefaultValues: function (): void {
                            throw new Error("Function not implemented.");
                        },
                        _formState: {
                            isDirty: false,
                            isLoading: false,
                            isSubmitted: false,
                            isSubmitSuccessful: false,
                            isSubmitting: false,
                            isValidating: false,
                            isValid: false,
                            submitCount: 0,
                            defaultValues: undefined,
                            dirtyFields: undefined,
                            touchedFields: undefined,
                            errors: undefined,
                        },
                        _updateValid: function (
                            shouldUpdateValid?: boolean | undefined
                        ): void {
                            throw new Error("Function not implemented.");
                        },
                        _updateFormState: function (
                            formState: Partial<FormState<FieldValues>>
                        ): void {
                            throw new Error("Function not implemented.");
                        },
                        _fields: undefined,
                        _formValues: undefined,
                        _proxyFormState: undefined,
                        _defaultValues: undefined,
                        _getWatch: function (
                            fieldNames?: string | string[] | undefined,
                            defaultValue?: { [x: string]: any } | undefined,
                            isMounted?: boolean | undefined,
                            isGlobal?: boolean | undefined
                        ) {
                            throw new Error("Function not implemented.");
                        },
                        _updateFieldArray: function <
                            T extends Function,
                            TFieldValues extends FieldValues,
                            TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>
                        >(
                            name: string,
                            updatedFieldArrayValues?:
                                | Partial<
                                      FieldArray<TFieldValues, TFieldArrayName>
                                  >[]
                                | undefined,
                            method?: T | undefined,
                            args?:
                                | Partial<{ argA: unknown; argB: unknown }>
                                | undefined,
                            shouldSetValue?: boolean | undefined,
                            shouldUpdateFieldsAndErrors?: boolean | undefined
                        ): void {
                            throw new Error("Function not implemented.");
                        },
                        _getFieldArray: function <TFieldArrayValues>(
                            name: string
                        ): Partial<TFieldArrayValues>[] {
                            throw new Error("Function not implemented.");
                        },
                        _updateDisabledField: function (
                            props: {
                                disabled?: boolean | undefined;
                                name: string;
                            } & (
                                | {
                                      field?: Field | undefined;
                                      fields?: undefined;
                                  }
                                | {
                                      field?: undefined;
                                      fields?:
                                          | Partial<Record<string, Field>>
                                          | undefined;
                                  }
                            )
                        ): void {
                            throw new Error("Function not implemented.");
                        },
                        _executeSchema: function (
                            names: string[]
                        ): Promise<{ errors: FieldErrors }> {
                            throw new Error("Function not implemented.");
                        },
                        register: function <TFieldName extends string = string>(
                            name: TFieldName,
                            options?:
                                | RegisterOptions<FieldValues, TFieldName>
                                | undefined
                        ): UseFormRegisterReturn<TFieldName> {
                            throw new Error("Function not implemented.");
                        },
                        handleSubmit: function (
                            onValid: SubmitHandler<FieldValues>,
                            onInvalid?:
                                | SubmitErrorHandler<FieldValues>
                                | undefined
                        ): (
                            e?: BaseSyntheticEvent<object, any, any> | undefined
                        ) => Promise<void> {
                            throw new Error("Function not implemented.");
                        },
                        unregister: function (
                            name?:
                                | string
                                | string[]
                                | readonly string[]
                                | undefined,
                            options?:
                                | (Omit<
                                      Partial<{
                                          keepDirtyValues: boolean;
                                          keepErrors: boolean;
                                          keepDirty: boolean;
                                          keepValues: boolean;
                                          keepDefaultValues: boolean;
                                          keepIsSubmitted: boolean;
                                          keepIsSubmitSuccessful: boolean;
                                          keepTouched: boolean;
                                          keepIsValid: boolean;
                                          keepSubmitCount: boolean;
                                      }>,
                                      | "keepIsSubmitted"
                                      | "keepSubmitCount"
                                      | "keepValues"
                                      | "keepDefaultValues"
                                      | "keepErrors"
                                  > & {
                                      keepValue?: boolean | undefined;
                                      keepDefaultValue?: boolean | undefined;
                                      keepError?: boolean | undefined;
                                  })
                                | undefined
                        ): void {
                            throw new Error("Function not implemented.");
                        },
                        getFieldState: function <TFieldName extends string>(
                            name: TFieldName,
                            formState?: FormState<FieldValues> | undefined
                        ): {
                            invalid: boolean;
                            isDirty: boolean;
                            isTouched: boolean;
                            error?: FieldError | undefined;
                        } {
                            throw new Error("Function not implemented.");
                        },
                        setError: function (
                            name: string,
                            error: ErrorOption,
                            options?: { shouldFocus: boolean } | undefined
                        ): void {
                            throw new Error("Function not implemented.");
                        },
                    }}
                    register={function <TFieldName extends string = string>(
                        name: TFieldName,
                        options?:
                            | RegisterOptions<FieldValues, TFieldName>
                            | undefined
                    ): UseFormRegisterReturn<TFieldName> {
                        throw new Error("Function not implemented.");
                    }}
                    setFocus={function <TFieldName extends string = string>(
                        name: TFieldName,
                        options?: Partial<{ shouldSelect: boolean }> | undefined
                    ): void {
                        throw new Error("Function not implemented.");
                    }}
                >
                    <Input placeholder="campo 1" />
                    <Input placeholder="campo 2" />
                    <Input placeholder="campo 3" />
                </Form>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Aceptar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
