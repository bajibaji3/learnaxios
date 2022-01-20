import {request} from "@/network/request";

export function loadHomeMessage() {
  return request({
    url: '/post',
    method: 'post',
  })
}