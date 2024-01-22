// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { TemplateMessage } from "./TemplateMessage";

export interface ChatCompletionReq { model: string, frequency_penalty: number | null, max_tokens: number | null, presence_penalty: number | null, stop: Array<string> | null, temperature: number | null, response_format: any, logit_bias: Record<string, number> | null, user: string | null, seed: number | null, top_p: number | null, template_messages: Array<TemplateMessage>, }