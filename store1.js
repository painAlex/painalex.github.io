(function () {
'use strict';
	
function addonStart() {
	    
/*
* * * Іконки розділів плагіна
*/
var icon_add_plugin= '<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/ xlink" width="256px" height="256px" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0">< /g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{ fill:#ffffff;} </style> <g> <path class="st0" d="M432.531,229.906c-9.906,0-19.125,2.594-27.313,6.375v-51.656c0-47.922 77.859-77.875h-51.641 c3.781-8.156,6.375-17.375,6.375-27.281C282.094,35.656,246.438,0,202.625,34-4. 84,79.469 c0,9.906,2.594,19.125, 6.359,27.281H77.875C34.938,106.75,0,141.688,0,184.625l0.047,23.828H0l0.078,33.781 c0,23.031,8.228 9,15.797,27.094,18.172,34.891,18.172c11.953, 0,23.141-4.953,33.203-14.703l0.906-0.422 l1.516-2.141c1.391-1.359,6.328-5.484,14.016-5.5c16.3492,6.7,2. 2c0, 16.344-13.313 ,29.656-29.672,29.656 c-7.672,0-12.609-4.125-14-5.5l-1.516-2.141l-0.906-0.422c-10.063-9.75-21.23-7. ,0.016-22.672, 2.375-34.891,18.172c-4.063,5.25-12.641,19.031-12.641,42.063L0,410.281h0.047L0,434.063 C0,477.057,5. 3v-0.063l3.047-0.016c23.016, 0,36.828-8.563,42.063-12.641 c15.797-12.219,18.172-27.094,18.172-34.891c0-11.953-4.953-23.141-10.2. 125-1.516 c-1.375-1.391-5.516 -6.328-5.516-14.016c0-16.344,13.313-29.656,29.672-29.656c16.344,0,29.656,13.313,29.656,29.658 c2,5.6. 6l-2.125,1.516l-0.438, 0.906c-9.75,10.063-14.703,21.25-14.703,33.203 c0,7.797,2.359,22.672,18.172,34.891c5.25,4.078,111.6.3. 0.047V512h40.609 c42.938,0, 77.859-34.938,77.859-77.875v-51.641c8.188,3.766,17.406,6.375,27.313,6.375c43.813,0,79.469-35.5666, 476.344,229.906,432.531,229.906z M432. 531,356.375c-19.031,0-37.469-22.063-37.469-22.063 c-3.344-3.203-6.391-4.813-9.25-4.813c-2.849,08,6. 5.125,5.891-5.125, 19.313v80.5 c0,25.063-20.313,45.391-45.391,45.391h-23.813l-33.797-0.078c-15.438,0-22.188-5.875-5.2. 63-5.875-5.563-9.172c0 -3.266,1.859-6.797,5.563-10.594c0,0,17.219-13.891,17.219-39.047 c0-34.313-27.844-62.156-62.156-45.64.6. -62.156,62.156c0,25.156,17.219 ,39.047,17.219,39.047 c3.688,3.797,5.531,7.328,5.531,10.594c0,3.297-1.844,6.313-5.531,9.172c0,02-3. .797,0.078H77.875 з -25.063,0-45.375-20.328-45.375-45.391l0.094-48.203h-0.047l0.016-9.422c0-15.422,5.875-22.203,5.853-2. .531,9.156-5.531s6 ... 6-62.156-62.156c-25.156,0 -39.047,17.219-39.047,17.219 c-3.797,3.688-7.328,5.531-10.609,5.531s-6.297-1.828-9.156-5.531c0,02-5.7. 156h0.031L32.5,184.625 c0 -25.063,20.313-45.375,45.375-45.375h80.5c13.422,0,19.313-5.125,19.313-5.125c6.422-4.938,6.422-12.12. 438-22.063-37.469c0 -25.953,21.047-46.984,47-46.984c25.938,0,46.984,21.031,46.984,46.984 c0,19.031-22.047,37.469-26.46 ,12.25,0,17.188c0,0 ,5.875,5.125,19.281,5.125h80.516 c25.078,0,45.391,20.313,45.391,45.375v80.516c0,13.422,5.125,19.29.29,2. ,5.094,4.813,7.938,4.813 c2.859,0,5.906-1.594,9.25-4.813c0,0,18.438-22.047,37.469-22.047c25.938,0,46.969,21.047,46.969,46,47,4 . 356.375,432.531,356.375z" ></path> </g> </g></svg>'
var icon_add_interface_plugin = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg viewBox= "0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.27209 20.7279L10.8686 14.131 4.131 13.5373 11.691 13.4632C11.8918 13.3979 12.1082 13.3979 12.309 13.4632C12.5373 13.5373 12.735411 13.5373 13.5373 39 20.6839M14 15L16.8686 12.1314C17.2646 11.7354 17.4627 11.5373 17.691 11.4632C17.8918 11.3918 11.3913 2C18.5373 11.5373 18.7354 11.7354 19.1314 12.1314L22 15M10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89044 7.99944 10 9ZM6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.672 21.3 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 38.23 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.2 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C129 4.27 stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin ="round"></path> </g></svg></div><div style="font-size:1.3em">Інтерфейс</div></div>'
var icon_add_management_plugin = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg fill= "#ffffff" width="256px" height="256px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id=" SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.015 12.97l-2.567-0.569c-0.2-0.64-0.462-1.252-0.762-1.841l1.389-2.313c0.518-0.829 0.78-2-1.47 8- 0.781-2.098-0.64-2.894-0.088l-2.251 1.434c-0.584-0.303-1.195-0.563-1.829-0.768l-0.576-2.598c-0.1.5 .984h-2c-1.104 0 -1.781 1.047-2 2l-0.642 2.567c-0.678 0.216-1.328 0.492-1.948 0.819l-2.308-1.47c-0.795-0.552-2.114-1. .414c-0.781 0.782-0.519 2 0 2.828l1 .461 2.435c-0.274 0.552-0.517 1.123-0.705 1.72l-2.566 0.569c-0.953 0.171-1.984 1.005-1.984 2.109 2.598 0.649c0.179 0.551 0.404 1.080 0.658 1.593l-1.462 2.438c- 0.518 0.828-0.78 2.047 0 2.828l1.415 1.414c0.78 0.782 2.098 0.64 2.894 0.089l2.313-1.474c0.628 0.518 0.828-0.78 l0.64 2.559c0.219 0.953 0.896 2 2 2h2c1.105 0 1.938-1.032 2.11-1.985l0.577-2.604c0.628-0.203 1.23-0.459 1.808-0.758l2.256 1.438c0.796 0.552 2.114 0.691-4.8.4. 0.782 0.518-2 0-2.828l- 1.39-2.317c0.279-0.549 0.521-1.12 0.716-1.714l2.599-0.649c0.953-0.219 2-0.895 2-2v-2c0-1.104-1.03 16.939c-0.085 0.061 -0.245 0.145-0.448 0.192l-3.708 0.926-0.344 1.051c-0.155 0.474-0.356 0.954-0.597 1.428l-0.502 0.9. 183 0.379 0.201 0.485l-1.316 1.314c-0.127-0.040-0.271-0.092 -0.341-0.14l-3.292-2.099-1.023 0.529c-0.493 0.256-0.999 0.468-1.503 0.631l-1.090 0.352-0.824 3.73 .218 0.417h-1.8c-0.061-0.085-0.145- 0.245-0.191-0.448l-0.921-3.681-1.066-0.338c-0.549-0.173-1.097-0.404-1.63-0.684l-1.028-0.543-3.299 0.143-0.409 0.143l-1.311-1.276 c0.018-0.104 0.072-0.274 0.181-0.449l2.045-3.408-0.487-0.98c-0.227-0.462-0.407-0.895-0.547-1.323l-1.323l .231-0.052-0.398- 0.139-0.485-0.2v-1.86c0.001 0.001 0.002 0.001 0.005 0.001 0.034 0 0.198-0.117 0.335-0.142l3.770-0.1. 49 0.333-0.917 0.588-1.43l0.487-0.98-2.024 -3.373c-0.125-0.201-0.184-0.38-0.201-0.485l1.315-1.314c0.128 0.041 0.271 0.093 0.34 0.14l3.350 2.1. 1.073-0.507 1.622-0.682l1.063- 0.338 0.912-3.649c0.053-0.231 0.138-0.398 0.2-0.485h1.859c-0.014 0.020 0.115 0.195 0.142 0.33910. 0.165 1.023 0.38 1.523 0.639l1.023 0.532 3.224-2.053c0.135- 0.092 0.279-0.143 0.409-0.143l1.313 1.276c-0.017 0.104-0.072 0.276-0.181 0.45l-1.98 3.296 0.530 0.530 . 3 0.635 1.529l0.346 1.104 3.697 0.82c0.224 0.041 0.398 0.171 0.434 0.241zM16 .013 9.99c-3.321 0-6.023 2.697-6.023 6.010s2.702 6.010 6.023 6.010 6.023-2.697 6.023-6.009c0-3.30 M16 20c-2.205 0-4-1.794-4-4s1. 794-4 4-4c2.206 0 4 1.794 4 4s-1.794 4-4 4z"></path> </g></svg></div><div style="font-size:1.3em"> Управління</div></div>'
var icon_add_online_plugin = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg viewBox= "0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32"><path d="m17 14.5 4.2 -4.5L4.9 1.2c-.1-.1-.3-.1-.6-.2L17 14.5zM23 21l5.9-3.2c.7-.4 1.1-1 1.1-1.8s-.4-1.5 -1.1-1.8L23 11l-4.7 5 4.7 5zM2.4 1.9c-.3.3-.4.7-.4 1.1v26c0 .4.1.8.4 1.2L15.6 16 2.4 1.9zM17 17.5. .2L21.2 22 17 17.5z" fill="currentColor" fill="#ffffff" class="fill-000000"></path></svg></div><div style="font-size:1.3 em">Онлайн</div></div>'
var icon_add_torrent_plugin = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg fill= "#ffffff" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id ="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M 13,7.00374 C 13,3.688 10.313331,1 7,1 3.6860465,1 1,3.6886234 1,7.00374 1,9.559584 2.5997.4. 2909 L 3.7153239,7.335377 3.3951412,5.846753 2.8282807,3.2136104 5.0240864,2.7404675 5.8357558,6.517506 C 6.0550249,7.537351 6.5172342,8.084675 7.2784468,7.920104 7.880814,7.7904422 2. ,6.924571 8.2352572,6.782442 8.2128342,6.606649 8.1754572,6.434597 L 7.2765781,2.2548571 9.47171632 c 0.412375,1.918129 1.528655,2.21174 1.528655, 2.21174 0,0 -1.506853,0.324779 -2.1384972,0.460052 C 9.2568522,9.360727 8.8320183,8.232416 8.8362003 c -0.179402,0.489351 -0.3818521,1.284156 -1.947882,1.622026 -0.114618,0.02431 -0.2267442,0.0399 -0.3372 ,0.05174 L 7.1656974,13 C 10.401163,12.912104 13,10.263377 13,7.00374 Z"></path></g></svg></div><div style="font-size: /div></div>'
var icon_add_tv_plugin = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg viewBox= "0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 3L12 7L7 3M6.8 21H17.2C18.2 21H17.2C18.2 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.29 11.2. 673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.1188 6. C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.726. 9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke="#ffffff" stroke-width=" 2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div><div style="font-size:1.3em">ТВ</div ></div>'
var icon_add_radio_plugin = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg fill= "#ffffff" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">< g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier "><path d="M44 3 A 2 2 0 0 0 42.097656 4.3886719L6.7890625 12.023438 A 1.0001 1.0001 0 0 0 6 13L6 1505 4 0 20L0 45C0 46.093063 0.9069372 47 2 47L48 47C49.093063 47 50 46.093063 50 45L50 20C50 17.250484 47.749516 15 45 15L8 15L8 13.806641L42.519531 6.3417969 A 2 2 0 0 0 44 7 44 3 z M 5 17L6.8320312 17 A 1.0001 1.0001 0 0 0 7.1582031 17L45 17C46.668484 17 48 18.331516 48 20L48 45L2 45L2 20C2 18.331516 3.3315161 18 5 8 .0001 1.0001 0 0 0 18.839844 20L6 20 A 1.0001 1.0001 0 0 0 5 21L5 27 A 1.0001 1.0001 0 0 0 6 28L18. 832031 28 A 1.0001 1.0001 0 0 0 19.158203 28L44 28 A 1.0001 1.0001 0 0 0 45 27L45 21 A 1.0001 1.000 1.0001 1.0001 0 0 0 18.984375 19.986328 z M 7 22L18 22L18 26L7 26L7 22 z M 20 22L43 22L43 26L20 26L20 22 z M 6 31 A 1 1 0 0 0 5 32 A 1 1 0 0 0 6 33 A 1 1 0 0 0 7 32 A 1 1 0 0 0 6 1 0 11 32 A 1 1 0 0 0 12 33 A 1 1 0 0 0 13 32 A 1 1 0 0 0 12 31 z M 18 31 A 1 1 0 0 0 17 32 A 1 1 0 0 0 18 0 0 0 19 32 A 1 1 0 0 0 18 31 z M 24 31 A 1 1 0 0 0 23 32 A 1 1 0 0 0 24 33 A 1 1 0 0 0 25 32 A 1 1 0 0 0 M 30 31 A 1 1 0 0 0 29 32 A 1 1 0 0 0 30 33 A 1 1 0 0 0 31 32 A 1 1 0 0 0 30 31 z M 39.5 31C36.473644 31 3. 9.525309 36.473641 42 39.5 42C42.527925 42 45 39.524772 45 36.5C45 33.475228 42.527925 31 39.5 31 z M 9 33 A 1 1 0 0 0 8 3 0 10 34 A 1 1 0 0 0 9 33 z M 15 33 A 1 1 0 0 0 14 34 A 1 1 0 0 0 15 35 A 1 1 0 0 0 16 34 A 1 1 0 0 0 15 33 z M 21 33 A 1 1 0 0 00 1 1 0 0 0 21 35 A 1 1 0 0 0 22 34 A 1 1 0 0 0 21 33 z M 27 33 A 1 1 0 0 0 26 34 A 1 1 0 0 0 27 35 A 1 1 2 34 A 1 1 0 0 0 27 33 z M 39.5 33C40.105002 33 40.662285 33.164648 41.15625 33.429688L39.292969 30.1 90 40.707031 36.707031L42.570312 34.84375C42.835319 35.337857 43 35.895564 43 36.5C43 38.445228 45.4 .554359 40 36 38.444691 36 36.5C36 34.555309 37.554359 33 39.5 33 z M 6 35 A 1 1 0 0 0 5 36 A 1 1 0 0 1 0 0 0 6 35 z M 12 35 A 1 1 0 0 0 11 36 A 1 1 0 0 0 12 37 A 1 1 0 0 0 13 36 A 1 1 0 0 0 12 35 z M 18 35 A 1 1 0 0 0 17 0 0 0 18 37 A 1 1 0 0 0 19 36 A 1 1 0 0 0 18 35 z M 24 35 A 1 1 0 0 0 23 36 A 1 1 0 0 0 24 37 A 1 1 0 0 0 1 1 0 0 0 24 35 z M 30 35 A 1 1 0 0 0 29 36 A 1 1 0 0 0 30 37 A 1 1 0 0 0 31 36 A 1 1 0 0 0 30 35 z M 9 3 0 0 0 8 38 A 1 1 0 0 0 9 39 A 1 1 0 0 0 10 38 A 1 1 0 0 0 9 37 z M 15 37 A 1 1 0 0 0 14 38 A 1 1 0 0 0 0 1 1 0 0 0 16 38 A 1 1 0 0 0 15 37 z M 21 37 A 1 1 0 0 0 20 38 A 1 1 0 0 0 21 39 A 1 1 0 0 0 22 38 A 1 1 37 z M 27 37 A 1 1 0 0 0 26 38 A 1 1 0 0 0 27 39 A 1 1 0 0 0 28 38 A 1 1 0 0 0 27 37 z M 6 39 A 1 1 0 0 0 0 1 1 0 0 0 6 41 A 1 1 0 0 0 7 40 A 1 1 0 0 0 6 39 z M 12 39 A 1 1 0 0 0 11 40 A 1 1 0 0 0 12 41 A 1 1 0 0 40 A 1 1 0 0 0 12 39 z M 18 39 A 1 1 0 0 0 17 40 A 1 1 0 0 0 18 41 A 1 1 0 0 0 19 40 A 1 1 0 0 0 18 39 z 1 1 0 0 0 23 40 A 1 1 0 0 0 24 41 A 1 1 0 0 0 25 40 A 1 1 0 0 0 24 39 z M 30 39 A 1 1 0 0 0 29 40 A 1 1 1 41 A 1 1 0 0 0 31 40 A 1 1 0 0 0 30 39 z"></path></g></svg></div><div style="font-size:1.3em">Радіо </div></div>'
var icon_add_sisi_plugin = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg viewBox= "0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role ="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id ="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M51.348 15.912c-3.332-3.347-7.63-4. 11.498-4.796c-.359 0-.721.016-1.08.038C37.734 6.492 36.295 2 36.295 2s-6.291 3.991-9.97 7.715-9.4. 9-6.391s-1.044 7.646-.678 13.247c -5.577-.361-13.188.692-13.188.692s3.051 4.912 6.368 9.185C5.97 30.146 2 36.47 2 36.47s4.646 1.497 1.497 261 8.681 4.776 12.213C23.599 58.692 36.494 62 46.373 62c5. 729-.001 10.445-1.113 12.492-3.17c5.522-5.549 4.184-31.161-7.517-42.918m6.074 41.482c-1.236 1.42-2. 9.275 0-21.77-3.147-28.771-10.18c- 8.058-8.096-3.363-20.183 4.41-27.987c5.389-5.413 12.057-8.646 17.838-8.646c3.9.001 7.283 1.418 1.418 1.418 4 13.172 9.643 22.61c1.147 8.891-.2 15.499-2.126 17.434" fill= "#ffffff"></path><path d="M40.172 18.321c.578.403 1.215.606 1.771.607c.541 0 1.006-.19 1.271-.573c.545-2.75 -.58-.405-1.215-.607-1.773-.607c-.539 0-1.006.19-1.273.572c-.543.776-.063 2.054 1.076 2.849" fill="#ff path d="M44.074 32.729a1.34 1.34 0 0 0-.891.31c-.715.621-.557 1.976.352 3.025c.604.695 1.389 1.0814.8. 91-.309c.717- .621.557-1.975-.352-3.024c-.604-.696-1.387-1.081-2.057-1.082" fill="#ffffff"></path><path d="M35.293 23.932a1. 0 0-.865.294c-.727.609-.592 1.968.303 3.031c.602.715 1.391 1.114 2.064 1.115c.33 0 .629-.097.5.6.9. 3-3.033c-. 601-.714-1.392-1.113-2.066-1.112" fill="#ffffff"></path><path d="M52.404 26.469c-.518-.945-1.369-1.53-2.111-1.1. 264 1.264 0 0 0-.604.148c-.832.456-.967 1.813-.301 3.032c.52.945 1.367 1.529 2.111 1.529c.213-4.0. 5.967-1.812.301-3.031 " fill="#ffffff"></path><path d="M54.955 38.393c-.102 0-.203.014-.303.039c-.918.24-1.379 1.521-1.027 2.866c.32 .038 c.102 0 .203-.013.303-.038c.918-.239 1.379-1.523 1.027-2.868c-.312-1.196-1.164-2.037-1.994-2.037" path d="M53.76 51.021c-.354.001-.674.105-.918.327c-.703.636-.518 1.987.414 3.019c.607.671 1.381 1.036 -.106.922-.329c.701 -.636.516-1.987-.418-3.017c-.606-.669-1.379-1.039-2.041-1.039" fill="#ffffff"></path><path d="M32.923 50.092c-. -.384-1.189-.573-1.736-.572c-.559 0-1.041.198-1.309.598c-.527.788-.02 2.054 1.135 2.825c.57.383 1.383-1. .042-.2 1.309-.6c.528-.786.02-2.053-1.135-2.824" fill="#ffffff"></path><path d="M21.165 46.683c-.569-.382-1.189-.551- -.571c-.561 0-1.042.199-1.309.597c-.527.787-.02 2.055 1.134 2.825c.57.382 1.191.574 1.738.573c.5.59 6-.786.02- 2.052-1.135-2.824" fill="#ffffff"></path><path d="M42.547 54.622a3.435 3.435 0 0 0-1.275-.259c-.797-.001-1.46 .91c-.354.877.404 2.013 1.691 2.531c.434.175.871.258 1.275.257c.797 0 1.465-.324 1.699-.908c2.38. fill="#ffffff" ></path><path d="M45.164 44.696c-.543-.323-1.119-.481-1.633-.481c-.617-.001-1.143.229-1.406.672c-.489.8 2.053 1.283 2.763c.543.322 1.119.48 1.635.48c.615 0 1.141-.229 1.404-.672c.485-.816-.09-2.054-1.2 path d="M34.568 37.753c-.602-.5-1.295-.758-1.895-.757c-.465-.001-.873.155-1.138.474c-.604.729-.2292.3. 603.498 1.297.758 1.897.758c.465 0 .871-.156 1.137-.475c.604-.73.231-2.043-.84-2.928" fill="#ffffff"></path" 867 23.223c-.385.001-.73.119-.982.368c-.676.665-.434 2.008.539 2.997c.611.618 1.364.953 2.0091-9.94 68c.676-.666.435-2.008 -.539-2.996c-.612-.621-1.364-.954-2.008-.955" fill="#ffffff"></path><path d="M22.812 34.974c-.598-.473 -1.275-.716-1.863-.715c-.484 0-.909.163-1.175.5c-.589.741-.184 2.046.904 2.906c.598.474 1.276.0.6.4. 1.174- .499c.587-.742.184-2.045-.904-2.907" fill="#ffffff"></path></g></svg></div><div style="font-size:1.3em" >18+</div></div>'
var ads = '<div style="padding: 0.3em 0.3em; padding-top: 0;"><div style="background: #3e3e3e; padding: 0.5em; border-radius: 1em;"><div style ="line-height: 1.2;"><span style="color: #ffffff"><div style="text-align: center;">Додавайте до нашої групи<br> ПЛАГІНИ БЕЗ ЦЕНЗУРИ</br><span style="color: #f3d900">@lampa_plugins_uncensored</span></span></div></div></div></div>'	

/* Функції, що викликаються регулярно */
	Lampa.Storage.set('needReboot', false);
	Lampa.Storage.set('needRebootSettingExit', false);
/* Запит на перезавантаження в модальному вікні */
function showReload(reloadText){
Lampa.Modal.open({
title: '',
align: 'center',
zIndex: 300,
html: $('<div class="about">' + reloadText + '</div>'),
buttons: [{
name: 'Ні',
onSelect: function onSelect() {
Lampa.Modal.close();
$('.modal').remove();
	Lampa.Controller.toggle('settings_component');
}
}, {
name: 'Так',
onSelect: function onSelect() {
window.location.reload();
}
}]
});
}
/* Стежимо за налаштуваннями */
function settingsWatch() {
	/* перевіряємо прапор перезавантаження і чекаємо виходу з налаштувань */
	if (Lampa.Storage.get('needRebootSettingExit')) {
  		var intervalSettings = setInterval(function() {
  			var elementSettings = $('#app > div.settings > div.settings__content.layer--height > div.settings__body > div');
  			if (!elementSettings.length > 0){
    				clearInterval(intervalSettings);
				showReload('Для повного видалення плагіна перезавантажте додаток!');
  			}
		}, 1000)
	}
}
/* Спосіб від Lampac -->
function itemON(sourceURL, sourceName) {
var script = document.createElement ('script');
script.src=sourceURL;
document.getElementsByTagName ('head')[0].appendChild (script);
			setTimeout(function() {
			Lampa.Settings.update();
			Lampa.Noty.show("Плагін" + sourceName + "успішно встановлено")
			}, 300);
};
--> */

function itemON(sourceURL, sourceName, sourceAuthor, itemName) {
if ($('DIV[data-name="' + itemName + '"]').find('.settings-param__status').hasClass('active')) {Lampa.Noty.show("Плагін вже встановлений !")} else {	
	// Якщо перезавантаження не потрібне - контроль після видалення плагінів
if (!Lampa.Storage.get('needReboot')) {
	// Отримуємо перелік плагінів
		var pluginsArray = Lampa.Storage.get('plugins');
	// Додаємо новий елемент до переліку
		pluginsArray.push({
			"author": sourceAuthor,
			"url": sourceURL,
			"name": sourceName,
			"status": 1
		});
	// Впроваджуємо змін у лампу
		Lampa.Storage.set('plugins', pluginsArray);
	// Робимо ін'єкцію скрипту для негайної роботи
		var script = document.createElement ('script');
		script.src=sourceURL;
		document.getElementsByTagName ('head')[0].appendChild (script);
		setTimeout(function() {
			Lampa.Settings.update();
			Lampa.Noty.show("Плагін" + sourceName + "успішно встановлено")
		}, 300);
// Надсилаємо сигнал очікування виходу з налаштувань для появи вікна із пропозицією перезавантаження
	// Lampa.Storage.set('needRebootSettingExit', true);
	// settingsWatch();
} //else {showReload('Для встановлення плагінів після видалення, потрібно перезавантажити додаток');}
}
}	
function hideInstall() {
	$("#hideInstall").remove();
	$('body').append('<div id="hideInstall"><style>div.settings-param__value{opacity: 0%!important;display: none;}</style><div>')
}

function deletePlugin(pluginToRemoveUrl) {
	var plugins = Lampa.Storage.get('plugins');
	var updatedPlugins = plugins.filter(function(obj) {return obj.url !== pluginToRemoveUrl});
	Lampa.Storage.set('plugins', updatedPlugins);
	//Lampa.Storage.set('needReboot', true);
	Lampa.Settings.update();
	Lampa.Noty.show("Плагін успішно видалень");
	Lampa.Storage.set('needRebootSettingExit', true);
	settingsWatch();
};

function checkPlugin(pluginToCheck) {
	var plugins = Lampa.Storage.get('plugins');
	var checkResult = plugins.filter(function(obj) {return obj.url == pluginToCheck});
	console.log('search', 'checkResult: ' + JSON.stringify(checkResult));
	console.log('search', 'pluginToCheck: ' + pluginToCheck);
	if (JSON.stringify(checkResult) !== '[]') {return true} else {return false}
};
	
/* Складова */
Lampa.SettingsApi.addComponent({
component: 'add_plugin',
name: 'Плагіні',
icon: icon_add_plugin
});
/* Інтерфейс */
Lampa.Settings.listener.follow('open', function (e) {
if (e.name == 'main') {
Lampa.SettingsApi.addComponent({
component: 'add_interface_plugin',
name: 'Interface'
				});
				setTimeout(function() {
					$('div[data-component="add_interface_plugin"]').remove();
					$('div[data-component="add_management_plugin"]').remove();
					$('div[data-component="add_online_plugin"]').remove();
					$('div[data-component="add_torrent_plugin"]').remove();
					$('div[data-component="add_tv_plugin"]').remove();
					$('div[data-component="add_radio_plugin"]').remove();
					$('div[data-component="add_sisi_plugin"]').remove();
					$('div[data-component="pirate_store"]').remove();
				}, 0);
				$("#hideInstall").remove();
				//$('body').append('<div id="hideInstall"><style>div.settings-param__value{opacity: 0%!important;display: none;}</style><div>')
		/* Зсуваємо розділ вище */
				setTimeout(function() {
					$('div[data-component=plugins]').before($('div[data-component=add_plugin]'))
					}, 30)
			}
		});

		Lampa.SettingsApi.addParam({
					component: 'add_plugin',
					param: {
						name: 'add_interface_plugin',
						type: 'static',
						default: true
},
					field: {
						name: icon_add_interface_plugin
},
					onRender: function(item) {
					item.on('hover:enter', function () {
						Lampa.Settings.create('add_interface_plugin');
						Lampa.Controller.enabled().controller.back = function(){
							Lampa.Settings.create('add_plugin');
						}
});
					}
		});
		
		Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'TMDB',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
                    			//default: '1',
						},
					field: {
						name: 'TMDB Proxy',
						description: 'Проксування постерів для сайту TMDB'
},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://cub.red/plugin/tmdb-proxy', 'TMDB Proxy', '@lampa', 'TMDB');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://cub.red/plugin/tmdb-proxy";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {
						$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('http://cub.red/plugin/tmdb-proxy')
						setTimeout(function() {	
							$('div[data-name="TMDB"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="TMDB"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="TMDB"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
       
		Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'Feedback',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Відгуки',
						description: 'Додає в картці кнопку з відгуками'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://newtv.mail66.org/o.js', 'Відгуки', '@elenatv99', 'Feedback');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://newtv.mail66.org/o.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('http://newtv.mail66.org/o.js')
						setTimeout(function() {	
							$('div[data-name="Feedback"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Feedback"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Feedback"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
       
		Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'Tricks',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Приємні дрібниці',
						description: 'Плагін дає змогу на вибір встановити різні доповнення (скрінсейвери, стилізація кнопок, стиль плеєра, часи у плеєрі тощо).'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://andreyurl54.github.io/diesel5/tricks.js', 'Приємні дрібниці', '@AndreyURL54', 'Tricks');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://andreyurl54.github.io/diesel5/tricks.js";
							deletePlugin(pluginToRemoveUrl);
						}	
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('https://andreyurl54.github.io/diesel5/tricks.js')
						setTimeout(function() {	
							$('div[data-name="Tricks"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Tricks"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Tricks"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);			  
					}
		});
		
		Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'Rating',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Рейтинг IMDB',
						description: 'Показ рейтингу IMDB у картці. Функціонал аналогічний частині з MODSs, тому їх не слід використовувати разом'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://nb557.github.io/plugins/rating.js', 'Рейтинг IMDB', '@t_anton', 'Rating');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://nb557.github.io/plugins/rating.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('https://nb557.github.io/plugins/rating.js')
						setTimeout(function() {	
							$('div[data-name="Rating"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Rating"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Rating"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'Want',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Старий стиль пунктів (Закладки, Подобається, Пізніше)',
						description: 'Плагін повертає в головне меню старий стиль відображення пунктів (Закладки, Подобається, Пізніше)'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://github.freebie.tom.ru/want.js', 'Старий стиль пунктів (Закладки, Подобається, Пізніше)', '@VitalikPVA', 'Want');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://github.freebie.tom.ru/want.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('http://github.freebie.tom.ru/want.js')
						setTimeout(function() {	
							$('div[data-name="Want"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Want"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Want"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'Sub_reset',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Скидання налаштувань субтитрів',
						description: 'Плагін скидає параметри субтитрів за замовчуванням'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://nb557.github.io/plugins/reset_subs.js', 'Скидання Налаштувань Субтитрів', '@t_anton', 'Sub_reset');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://nb557.github.io/plugins/reset_subs.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('https://nb557.github.io/plugins/reset_subs.js')
						setTimeout(function() {	
							$('div[data-name="Sub_reset"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Sub_reset"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Sub_reset"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'Mult',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Мультфільми',
						description: 'Плагін замінює пункт Аніме на Мульт'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('http://95.215.8.180/plugins/mult.js', 'Мультфільми', '@AndreyURL54', 'Mult');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://95.215.8.180/plugins/mult.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
			onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('http://95.215.8.180/plugins/mult.js')
						setTimeout(function() {	
							$('div[data-name="Mult"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Mult"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Mult"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'Collections',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Колекції',
						description: 'Виявіть захоплюючі колекції фільмів та серіалів у головному меню програми. Від новинок до класики кожна колекція це захоплююче занурення у світ кіномистецтва'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://cub.red/plugin/collections', 'Колекції', '@lampa', 'Collections');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://cub.red/plugin/collections";
							deletePlugin(pluginToRemoveUrl);
						}
					},
			onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('https://cub.red/plugin/collections')
						setTimeout(function() {	
							$('div[data-name="Collections"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Collections"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Collections"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'Weather',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Погода',
						description: 'Плагін по черзі показуватиме час і погоду, чергуючи їх показання'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://bylampa.github.io/weather.js', 'Погода', '@scabrum', 'Weather');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://bylampa.github.io/weather.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
			onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('https://bylampa.github.io/weather.js')
						setTimeout(function() {	
							$('div[data-name="Weather"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Weather"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Weather"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'Cub_off',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Cub Off',
						description: 'Плагін прибирає елементи, що пропонують оформитиcub premium'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://bylampa.github.io/cub_off.js', 'Cub Off', '@scabrum', 'Cub_off');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://bylampa.github.io/cub_off.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
			onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('https://bylampa.github.io/cub_off.js')
						setTimeout(function() {	
							$('div[data-name="Cub_off"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Cub_off"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Cub_off"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'Style_interface_fix',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Стильний інтерфейс',
						description: 'Новий стильний інтерфейс для каталогів TMDB та CUB. Сподобається тим, кому подобається інтерфейс у кінопошуку чи netflix'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://bylampa.github.io/interface.js', 'Стильний інтерфейс', '@lampa', 'Style_interface_fix');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://bylampa.github.io/interface.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
			onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('https://bylampa.github.io/interface.js')
						setTimeout(function() {	
							$('div[data-name="Style_interface_fix"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Style_interface_fix"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Style_interface_fix"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'New_cat',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Додаткові категорії',
						description: 'Плагін дозволяє додати на вибір у головне меню категорії (Документалки, Концерти та Мультфільми)'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://lampame.github.io/main/nc/nc.js', 'Додаткові Категорії', '@GwynnBleiidd', 'New_cat');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://lampame.github.io/main/nc/nc.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
			onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('https://lampame.github.io/main/nc/nc.js')
						setTimeout(function() {	
							$('div[data-name="New_cat"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="New_cat"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="New_cat"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_interface_plugin',
					param: {
						name: 'New_source',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Додаткові джерела',
						description: 'Плагін додає додаткові джерела для отримання інформації про фільми'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://bylampa.github.io/source.js', 'Додаткові джерела', '@scabrum', 'New_source');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://bylampa.github.io/source.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
			onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('https://bylampa.github.io/source.js')
						setTimeout(function() {	
							$('div[data-name="New_source"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="New_source"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="New_source"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
	        			component: 'add_interface_plugin',
					param: {
						name: 'Start',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Start',
						description: 'Плагін дозволяє заходити на заблоковані картки'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://bylampa.github.io/start.js', 'Start', '@scabrum', 'Start');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://bylampa.github.io/start.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
			onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
						var myResult = checkPlugin('https://bylampa.github.io/start.js')
						setTimeout(function() {	
							$('div[data-name="Start"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Start"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Start"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
						component: 'add_interface_plugin',
						param: {
							name: 'goldtheme',
							type: 'select',
							values: {
								1: 'Встановити',
								2: "Видалити",
							},
						//default: '1',
							},
						field: {
							name: 'Золота тема',
							description: 'Плагін включає золоту тему'
						},
						onChange: function(value) {
							if (value == '1') {
								itemON('https://bazzzilius.github.io/scripts/gold_theme.js', 'Золота Тема', '@BazZziliuS', 'goldtheme');
							}
							if (value == '2') {
								var pluginToRemoveUrl = "https://bazzzilius.github.io/scripts/gold_theme.js";
								deletePlugin(pluginToRemoveUrl);
							}
						},
								onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall()
							var myResult = checkPlugin('https://bazzzilius.github.io/scripts/gold_theme.js')
							setTimeout(function() {	
								$('div[data-name="goldtheme"]').append('<div class="settings-param__status one"></div>')
								if (myResult) {
									$('div[data-name="goldtheme"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
								} else {
									$('div[data-name="goldtheme"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
								}
							}, 100);
						}
		});
	/* Lampa.SettingsApi.addParam({
component: 'add_interface_plugin',
param: {
name: 'Reboot_interface_plugin',
type: 'static',
},
field: {
name: '<div class="settings-folder" style="padding:0!important"><div style="display: block; margin: 0 auto;height:2.3em;padding-right:.1em">< svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke- width=" 0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g style="fill:none; stroke:#ffffff;stroke-width:12px;stroke-linecap:round;stroke-linejoin:round;"> <path d="m 50,10 0,35"></path> <path d="M 20 ,29 C 4,52 15,90 50,90 85,90 100,47 74,20"></path> </g> <path style="fill:#ffffff;" d="m 2,21 29,-2 2,29"></path> </g></svg></div></div>',
					description: '<div style="text-align: center;">Натисніть, щоб перезавантажити Lampa</div>',
	},
onRender: function (item) {
item.on('hover:enter', function(){
location.reload();
});
}
	});*/
	        

Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
							component: 'add_management_plugin',
							name: 'Management'
						});
					}
		});
/* Управління */
		Lampa.SettingsApi.addParam({
					component: 'add_plugin',
					param: {
						name: 'add_management_plugin',
      		type: 'static',
						default: true
                        		},
					field: {
name: icon_add_management_plugin
},
					onRender: function(item) {
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_management_plugin');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('add_plugin');
							}
						});
					}
		});
       
		Lampa.SettingsApi.addParam({
					component: 'add_management_plugin',
					param: {
                               		name: 'Exit_Menu',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
name: 'Вихід',
description: 'Плагін додає пункт Вихід до головного меню'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://tsynik.github.io/lampa/e.js', 'Вихід', '@tsynik', 'Exit_Menu');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://tsynik.github.io/lampa/e.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://tsynik.github.io/lampa/e.js')
						setTimeout(function() {	
							$('div[data-name="Exit_Menu"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Exit_Menu"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Exit_Menu"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
       
		Lampa.SettingsApi.addParam({
					component: 'add_management_plugin',
					param: {
						name: 'New_Version',
						type: 'select',																																		
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
						name: 'Перевірка нової версії',
						description: 'Перевіряє наявність нової версії програми на Android TV'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://nemiroff.github.io/lampa/updater.js', 'Перевірка Нової Версії', '@nemiroff', 'New_Version');
							}
						if (value == '2') {
							var pluginToRemoveUrl = "https://nemiroff.github.io/lampa/updater.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://nemiroff.github.io/lampa/updater.js')
						setTimeout(function() {	
							$('div[data-name="New_Version"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="New_Version"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="New_Version"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
       
		Lampa.SettingsApi.addParam({
					component: 'add_management_plugin',
					param: {
                               			name: 'Hot_Buttons',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
					},
                            		field: {
                                    		name: 'Гарячі кнопки',
                                    		description: 'Плагін викликає меню плеєра лампи за кнопками пульта: 5 - плейлист, 8 - аудіодоріжки, 0 - субтитри, channel+/- наступний/попередній файл у плейлисті'
                            		},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://nnmdd.github.io/lampa_hotkeys/hotkeys.js', 'Гарячі Кнопки', '@nnmd', 'Hot_Buttons');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://nnmdd.github.io/lampa_hotkeys/hotkeys.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://nnmdd.github.io/lampa_hotkeys/hotkeys.js')
						setTimeout(function() {	
							$('div[data-name="Hot_Buttons"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Hot_Buttons"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Hot_Buttons"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);			  
					}
		});
       
		Lampa.SettingsApi.addParam({
					component: 'add_management_plugin',
					param: {
						name: 'DLNA',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
                                    		name: 'DLNA (Tizen, Orsay)',
                                    		description: 'Плагін працює на пристрої Orsay, для Tizen необхідно оновити віджет до версії 1.9.1'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://cub.red/plugin/dlna', 'DLNA', '@lampa', 'DLNA');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://cub.red/plugin/dlna";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('http://cub.red/plugin/dlna')
						setTimeout(function() {	
							$('div[data-name="DLNA"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="DLNA"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="DLNA"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);			  
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_management_plugin',
					param: {
						name: 'Select_Weapon',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
                                    		name: 'Тип управління',
                                    		description: 'Плагін при установці дозволяє вибрати тип керування (Пульт без мишки, Пульт з мишею, Тачскрін), а також скинути тип керування обраний раніше'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://nemiroff.github.io/lampa/select_weapon.js', 'Тип Управління', '@nemiroff', 'Select_Weapon');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://nemiroff.github.io/lampa/select_weapon.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://nemiroff.github.io/lampa/select_weapon.js')
						setTimeout(function() {	
							$('div[data-name="Select_Weapon"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Select_Weapon"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Select_Weapon"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);			  
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_management_plugin',
					param: {
						name: 'Touch_off',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
                                    		name: 'Вимкнення тача',
                                    		description: 'Плагін вимикає сенсорне керування, якщо воно було включено помилково'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://nb557.github.io/plugins/not_mobile.js', 'Вимкнення Тача', '@t_anton', 'Touch_off');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://nb557.github.io/plugins/not_mobile.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://nb557.github.io/plugins/not_mobile.js')
						setTimeout(function() {	
							$('div[data-name="Touch_off"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Touch_off"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Touch_off"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);			  
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_management_plugin',
					param: {
						name: 'Wsoff',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
                                    		name: 'Wsoff',
                                    		description: 'Плагін відключення помилки (Request was denied for security) на старих версіях Android.Не встановлювати, якщо помилки немає'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('http://plugin.rootu.top/wsoff.js', 'Wsoff', '@rootu', 'Wsoff');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://plugin.rootu.top/wsoff.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('http://plugin.rootu.top/wsoff.js')
						setTimeout(function() {	
							$('div[data-name="Wsoff"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Wsoff"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Wsoff"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);			  
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_management_plugin',
					param: {
						name: 'Redirect',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
						},
					field: {
                                    		name: 'Зміна сервера',
                                    		description: 'Плагін дозволяє змінити сервер програми'
					},
					onChange: function(value) {
						if (value == '1') {
						itemON('https://bylampa.github.io/redirect.js', 'Зміна Сервера', '@scabrum', 'Redirect');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://bylampa.github.io/redirect.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://bylampa.github.io/redirect.js')
						setTimeout(function() {	
							$('div[data-name="Redirect"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Redirect"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Redirect"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);			  
					}
		});
	/* Lampa.SettingsApi.addParam({
component: 'add_management_plugin',
param: {
name: 'Reboot_management_plugin',
type: 'static',
},
field: {
name: '<div class="settings-folder" style="padding:0!important"><div style="display: block; margin: 0 auto;height:2.3em;padding-right:.1em">< svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width=" 0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g style="fill:none; stroke:#ffffff;stroke-width:12px;stroke-linecap:round;stroke-linejoin:round;"> <path d="m 50,10 0,35"></path> <path d="M 20 ,29 C 4,52 15,90 50,90 85,90 100,47 74,20"></path> </g> <path style="fill:#ffffff;" d="m 2,21 29,-2 2,29"></path> </g></svg></div></div>',
					description: '<div style="text-align: center;">Натисніть, щоб перезавантажити Lampa</div>',
	},
onRender: function (item) {
item.on('hover:enter', function(){
location.reload();
});
}
	});*/

Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
							component: 'add_online_plugin',
							name: 'Online'
						});
					}
		});
/* Online */
		Lampa.SettingsApi.addParam({
					component: 'add_plugin',
					param: {
						name: 'add_online_plugin',
						type: 'static',
						default: true
                          		},
					field: {
						name: icon_add_online_plugin
                          		},
					onRender: function(item) {
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_online_plugin');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('add_plugin');
							}
						});
					}
		});
                 
		Lampa.SettingsApi.addParam({
					component: 'add_online_plugin',
					param: {
						name: 'Modss',
						type: 'select',
					values: {
						1: 'Встановити',
						2: "Видалити",
					},
					//default: '1',
					},
					field: {
						name: 'Modss',
						description: 'Плагін дозволяє дивитися фільми та серіали в онлайн. На вибір є 17 балансерів і різні доповнення через меню налаштувань Modss. VIP 4K можна підключити через телеграм-бота @modssmy_bot'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://lampa.stream/modss', 'Modss', '@Nikolai4', 'Modss');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://lampa.stream/modss";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('http://lampa.stream/modss')
						setTimeout(function() {	
							$('div[data-name="Modss"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Modss"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Modss"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);		  
					}
});
        
		Lampa.SettingsApi.addParam({
					component: 'add_online_plugin',
					param: {
                                		name: 'Online_Mod',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
					},
					//default: '1',
              				},
					field: {
						name: 'Online_Mod',
						description: 'Плагін дозволяє дивитися фільми та серіали в онлайн. На вибір є 7 балансерів'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://nb557.github.io/plugins/online_mod.js', 'Online Mod', '@t_anton', 'Online_Mod');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://nb557.github.io/plugins/online_mod.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://nb557.github.io/plugins/online_mod.js')
						setTimeout(function() {	
							$('div[data-name="Online_Mod"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Online_Mod"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Online_Mod"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);			  
					}
});
        
		Lampa.SettingsApi.addParam({
					component: 'add_online_plugin',
					param: {
                                		name: 'Онлайн_Prestige',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
					},
					//default: '1',
					},
					field: {
						name: 'Онлайн Prestige',
						description: 'Аналог плагіна Online від розробника програми Lampa, але з новим інформативним інтерфейсом для перегляду фільмів та серіалів в онлайн'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://bwa.to/plugins/prestige.js', 'Онлайн Prestige', '@lampa', 'Онлайн_Prestige');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://bwa.to/plugins/prestige.js";
							deletePlugin(pluginToRemoveUrl);
						}
},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://bwa.to/plugins/prestige.js')
						setTimeout(function() {	
							$('div[data-name="Онлайн_Prestige"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Онлайн_Prestige"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Онлайн_Prestige"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);				  
					}
});
        
		Lampa.SettingsApi.addParam({
					component: 'add_online_plugin',
					param: {
                               			name: 'Онлайн_BWA',
                   				type: 'select',
                   				values: {
							1: 'Встановити',
							2: "Видалити",
                   				},
					//default: '1',
               				},
					field: {
                                  		name: 'Онлайн BWA',
                                  		description: 'Плагін для перегляду фільмів та серіалів в онлайн'
					},
                           		onChange: function(value) {
					if (value == '1') {
						itemON('https://bwa.to/o', 'Онлайн BWA', '@rik', 'Онлайн_BWA');
					}
					if (value == '2') {
						var pluginToRemoveUrl = "https://bwa.to/o";
						deletePlugin(pluginToRemoveUrl);
					}
},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://bwa.to/o')
						setTimeout(function() {	
							$('div[data-name="Онлайн_BWA"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Онлайн_BWA"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Онлайн_BWA"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);			  
					}
		});
	/* Lampa.SettingsApi.addParam({
component: 'add_online_plugin',
param: {
name: 'Reboot_online_plugin',
type: 'static',
},
field: {
name: '<div class="settings-folder" style="padding:0!important"><div style="display: block; margin: 0 auto;height:2.3em;padding-right:.1em">< svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width=" 0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g style="fill:none; stroke:#ffffff;stroke-width:12px;stroke-linecap:round;stroke-linejoin:round;"> <path d="m 50,10 0,35"></path> <path d="M 20 ,29 C 4,52 15,90 50,90 85,90 100,47 74,20"></path> </g> <path style="fill:#ffffff;" d="m 2,21 29,-2 2,29"></path> </g></svg></div></div>',
					description: '<div style="text-align: center;">Натисніть, щоб перезавантажити Lampa</div>',
	},
onRender: function (item) {
item.on('hover:enter', function(){
location.reload();
});
}
		});*/		   
/* Торрент */
		Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
							component: 'add_torrent_plugin',
							name: 'Torrents'
						});
					}
		});
                     
		Lampa.SettingsApi.addParam({
					component: 'add_plugin',
					param: {
                                   		name: 'add_torrent_plugin',
                                   		type: 'static',
                                   		default: true
                           		},
					field: {
                                   		name: icon_add_torrent_plugin
                           		},
					onRender: function(item) {
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_torrent_plugin');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('add_plugin');
							}
						});
					}
		});
                     
		Lampa.SettingsApi.addParam({
					component: 'add_torrent_plugin',
					param: {
						name: 'Switch_Parser',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
                  			},
					field: {
						name: 'Переключення парсерів',
						description: 'Плагін дозволяє перемикатися між парсерами jackett зі списку з правильними параметрами. У налаштуваннях парсера з'явиться пункт зі списком загальнодоступних jacketts'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://bylampa.github.io/jackett.js', 'Переключення Парсерів', '@AndreyURL54', 'Switch_Parser');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://bylampa.github.io/jackett.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://bylampa.github.io/jackett.js')
						setTimeout(function() {	
							$('div[data-name="Switch_Parser"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Switch_Parser"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Switch_Parser"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);			  
					}
		});
         
		Lampa.SettingsApi.addParam({
					component: 'add_torrent_plugin',
					param: {
						name: 'Tracks',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
					},
					field: {
						name: 'Tracks',
						description: 'Плагін замінює назву аудіодоріжок та субтитрів у плеєрі (працює тільки в торрентах)'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://cub.red/plugin/tracks', 'Tracks', '@lampa', 'Tracks');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://cub.red/plugin/tracks";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('http://cub.red/plugin/tracks')
						setTimeout(function() {	
							$('div[data-name="Tracks"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Tracks"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Tracks"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);		  
					}
		});

	Lampa.SettingsApi.addParam({
					component: 'add_torrent_plugin',
					param: {
						name: 'Setting_torrents',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
					},
					field: {
						name: 'Налаштування торентів (Web OS, Tizen)',
						description: 'Плагін для ТБ, на яких Lampa встановлена через офіційні магазини LG Store та Tizen App Store. Включає в налаштуваннях відображення пунктів Парсер та Torrserver, необхідних для перегляду торентів'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://cub.red/plugin/etor', 'Налаштування Торентів', '@lampa', 'Setting_torrents');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://cub.red/plugin/etor";
							deletePlugin(pluginToRemoveUrl);
}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('http://cub.red/plugin/etor')
						setTimeout(function() {	
							$('div[data-name="Setting_torrents"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Setting_torrents"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Setting_torrents"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);		  
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_torrent_plugin',
					param: {
						name: 'Check_server',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
					},
					field: {
						name: 'Пошук локального TorrServera',
						description: 'Плагін дозволяє зробити пошук вашого локального TorrServera'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://95.215.8.180/checker.js', 'Пошук Локального TorrServera', '@AndreyURL54', 'Check_server');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://95.215.8.180/checker.js";
							deletePlugin(pluginToRemoveUrl);
}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('http://95.215.8.180/checker.js')
						setTimeout(function() {	
							$('div[data-name="Check_server"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Check_server"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Check_server"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);		  
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_torrent_plugin',
					param: {
						name: 'Torr_download',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
					},
					field: {
						name: 'Закачування торентів',
						description: 'Плагін додає підключення торент клієнтів таких як qBittorent, Transmission з подальшою можливістю завантаження торрента через нього для локального перегляду'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://lampame.github.io/td/td.js', 'Закачування Торрентов', '@feliks', 'Torr_download');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://lampame.github.io/td/td.js";
							deletePlugin(pluginToRemoveUrl);
}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://lampame.github.io/td/td.js')
						setTimeout(function() {	
							$('div[data-name="Torr_download"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Torr_download"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Torr_download"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);		  
					}
		});
	/*
	Lampa.SettingsApi.addParam({
component: 'add_torrent_plugin',
param: {
name: 'Reboot_torrent_plugin',
type: 'static',
},
field: {
name: '<div class="settings-folder" style="padding:0!important"><div style="display: block; margin: 0 auto;height:2.3em;padding-right:.1em">< svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width=" 0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g style="fill:none; stroke:#ffffff;stroke-width:12px;stroke-linecap:round;stroke-linejoin:round;"> <path d="m 50,10 0,35"></path> <path d="M 20 ,29 C 4,52 15,90 50,90 85,90 100,47 74,20"></path> </g> <path style="fill:#ffffff;" d="m 2,21 29,-2 2,29"></path> </g></svg></div></div>',
					description: '<div style="text-align: center;">Натисніть, щоб перезавантажити Lampa</div>',
	},
onRender: function (item) {
item.on('hover:enter', function(){
location.reload();
});
}
		});*/			   
	
		Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
							component: 'add_tv_plugin',
							name: 'TV'
						});
					}
		});
/* Телеканали */
		Lampa.SettingsApi.addParam({
					component: 'add_plugin',
					param: {
						name: 'add_tv_plugin',
						type: 'static',
						default: true
					},
					field: {
						name: icon_add_tv_plugin
					},
					onRender: function(item) {
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_tv_plugin');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('add_plugin');
							}
						});
					}
		});
		
		Lampa.SettingsApi.addParam({
					component: 'add_tv_plugin',
					param: {
						name: 'Diesel',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
					},
					field: {
						name: 'Дизель ТБ',
						description: 'Плагін для безкоштовного перегляду телеканалів та комерційних плейлистів з телепрограмою та записом архіву'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://andreyurl54.github.io/diesel5/diesel.js', 'Дизель ТБ', '@AndreyURL54', 'Diesel');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://andreyurl54.github.io/diesel5/diesel.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://andreyurl54.github.io/diesel5/diesel.js')
						setTimeout(function() {	
							$('div[data-name="Diesel"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Diesel"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Diesel"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
		
		Lampa.SettingsApi.addParam({
					component: 'add_tv_plugin',
					param: {
						name: 'Kulik',
                        			type: 'select',
                        			values: {
							1: 'Встановити',
							2: "Видалити",
                        		},
					//default: '1',
					},
					field: {
						name: 'Kulik',
						description: 'Плагін для перегляду каналів IPTV, відсортованих за різними категоріями. Є можливість змінити стиль плагіна, сервер мовлення, а також додати канали до вибраного'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://cdn.kulik.uz/cors', 'Kulik TV', '@SawamuraRen', 'Kulik');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://cdn.kulik.uz/cors";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('http://cdn.kulik.uz/cors')
						setTimeout(function() {	
							$('div[data-name="Kulik"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Kulik"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Kulik"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});

		Lampa.SettingsApi.addParam({
					component: 'add_tv_plugin',
					param: {
						name: 'IPTV',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
					},
					field: {
							name: 'IPTV',
							description: 'Плагін для перегляду каналів IPTV. Сортування каналів за групами та можливість додати канали до вибраного. Працює лише зі своїм плейлистом, доданим на сайті https://cub.watch/iptv'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://cub.red/plugin/iptv', 'IPTV', '@lampa', 'IPTV');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://cub.red/plugin/iptv";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('http://cub.red/plugin/iptv')
						setTimeout(function() {	
							$('div[data-name="IPTV"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="IPTV"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="IPTV"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_tv_plugin',
					param: {
						name: 'Hack_TV',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
					//default: '1',
					},
					field: {
							name: 'Hack TV',
							description: 'Плагін для перегляду IPTV каналів'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://bylampa.github.io/tv.js', 'Hack TV', '@scabrum', 'Hack_TV');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://bylampa.github.io/tv.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://bylampa.github.io/tv.js')
						setTimeout(function() {	
							$('div[data-name="Hack_TV"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Hack_TV"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Hack_TV"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	/* Lampa.SettingsApi.addParam({
component: 'add_tv_plugin',
param: {
name: 'Reboot_tv_plugin',
type: 'static',
},
field: {
name: '<div class="settings-folder" style="padding:0!important"><div style="display: block; margin: 0 auto;height:2.3em;padding-right:.1em">< svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width=" 0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g style="fill:none; stroke:#ffffff;stroke-width:12px;stroke-linecap:round;stroke-linejoin:round;"> <path d="m 50,10 0,35"></path> <path d="M 20 ,29 C 4,52 15,90 50,90 85,90 100,47 74,20"></path> </g> <path style="fill:#ffffff;" d="m 2,21 29,-2 2,29"></path> </g></svg></div></div>',
					description: '<div style="text-align: center;">Натисніть, щоб перезавантажити Lampa</div>',
	},
onRender: function (item) {
item.on('hover:enter', function(){
location.reload();
});
}
		});*/			   

		Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
							component: 'add_radio_plugin',
							name: 'Radio'
						});
					}
		});
/* Радіо */
		Lampa.SettingsApi.addParam({
					component: 'add_plugin',
					param: {
						name: 'add_radio_plugin',
						type: 'static',
					default: true
                         		},
					field: {
						name: icon_add_radio_plugin
                         		},
					onRender: function(item) {
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_radio_plugin');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('add_plugin');
							}
						});
					}
		});
		
		Lampa.SettingsApi.addParam({
					component: 'add_radio_plugin',
					param: {
						name: 'Record',
                        			type: 'select',
                        			values: {
							1: 'Встановити',
							2: "Видалити",
                        			},
					//default: '1',
					},
					field: {
						name: 'Радіо Record',
						description: 'Прослуховування радіо від радіостанції Radio Record. Доступно більше 50 жанрів, знайдеться і на ваш смак
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('http://cub.red/plugin/radio', 'Радіо Record', '@lampa', 'Record');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "http://cub.red/plugin/radio";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('http://cub.red/plugin/radio')
						setTimeout(function() {	
							$('div[data-name="Record"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Record"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Record"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
		
		Lampa.SettingsApi.addParam({
					component: 'add_radio_plugin',
					param: {
						name: 'Record_Mod',
       				type: 'select',
                       				values: {
							1: 'Встановити',
							2: "Видалити",
                        			},
					//default: '1',
					},
					field: {
						name: 'Радіо Record Mod',
						description: 'Все той же плагін Радіо Record, але з якістю потоку в 320kbp/s та єдиним списком станцій без поділу на жанри'
					},
					onChange: function(value) {
                        			if (value == '1') {
							itemON('https://nemiroff.github.io/lampa/rr.js', 'Радіо Record Mod', '@nemiroff', 'Record_Mod');
                     				}
						if (value == '2') {
							var pluginToRemoveUrl = "https://nemiroff.github.io/lampa/rr.js";
							deletePlugin(pluginToRemoveUrl);
						}
},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://nemiroff.github.io/lampa/rr.js')
						setTimeout(function() {	
							$('div[data-name="Record_Mod"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Record_Mod"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Record_Mod"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);
					}
		});
	/* Lampa.SettingsApi.addParam({
component: 'add_radio_plugin',
param: {
name: 'Reboot_radio_plugin',
type: 'static',
},
field: {
name: '<div class="settings-folder" style="padding:0!important"><div style="display: block; margin: 0 auto;height:2.3em;padding-right:.1em">< svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width=" 0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g style="fill:none; stroke:#ffffff;stroke-width:12px;stroke-linecap:round;stroke-linejoin:round;"> <path d="m 50,10 0,35"></path> <path d="M 20 ,29 C 4,52 15,90 50,90 85,90 100,47 74,20"></path> </g> <path style="fill:#ffffff;" d="m 2,21 29,-2 2,29"></path> </g></svg></div></div>',
					description: '<div style="text-align: center;">Натисніть, щоб перезавантажити Lampa</div>',
	},
onRender: function (item) {
item.on('hover:enter', function(){
location.reload();
});
}
		});*/			   
/* Полуниця */
		Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
component: 'add_sisi_plugin',
							name: 'Sisi'
						});
					}
		});
		
		Lampa.SettingsApi.addParam({
					component: 'add_plugin',
					param: {
						name: 'add_sisi_plugin',
						type: 'static',
						default: true
					},
					field: {
						name: icon_add_sisi_plugin
					},
					onRender: function(item) {
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_sisi_plugin');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('add_plugin');
							}
						});
					}
		});
		
		Lampa.SettingsApi.addParam({
					component: 'add_sisi_plugin',
					param: {
						name: 'Sisi',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
						//default: '1',
					},
					field: {
						name: 'Полуничка',
						description: 'Плагін для перегляду контенту 18+'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://bwa.to/s', 'Полуничка', '@rik', 'Sisi');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://bwa.to/s";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://bwa.to/s')
						setTimeout(function() {	
							$('div[data-name="Sisi"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Sisi"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Sisi"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);		  
					}
		});
	Lampa.SettingsApi.addParam({
					component: 'add_sisi_plugin',
					param: {
						name: 'Nyam',
						type: 'select',
						values: {
							1: 'Встановити',
							2: "Видалити",
						},
						//default: '1',
					},
					field: {
						name: 'Sisi Nyam',
						description: 'Інша версія плагіна Полуничка (частково платна)'
					},
					onChange: function(value) {
						if (value == '1') {
							itemON('https://sisi.am/nyam.js', 'Sisi Nyam', '@rik', 'Nyam');
						}
						if (value == '2') {
							var pluginToRemoveUrl = "https://sisi.am/nyam.js";
							deletePlugin(pluginToRemoveUrl);
						}
					},
					onRender: function (item) {$('.settings-param__name', item).css('color','f3d900'); hideInstall();
						var myResult = checkPlugin('https://sisi.am/nyam.js')
						setTimeout(function() {	
							$('div[data-name="Nyam"]').append('<div class="settings-param__status one"></div>')
							if (myResult) {
								$('div[data-name="Nyam"]').find('.settings-param__status').removeClass('active error wait').addClass('active')
							} else {
								$('div[data-name="Nyam"]').find('.settings-param__status').removeClass('active error wait').addClass('error')
							}
						}, 100);		  
					}
		});
	/*Lampa.SettingsApi.addParam({
component: 'add_sisi_plugin',
param: {
name: 'Reboot_sisi_plugin',
type: 'static',
},
field: {
name: '<div class="settings-folder" style="padding:0!important"><div style="display: block; margin: 0 auto;height:2.3em;padding-right:.1em">< svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width=" 0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g style="fill:none; stroke:#ffffff;stroke-width:12px;stroke-linecap:round;stroke-linejoin:round;"> <path d="m 50,10 0,35"></path> <path d="M 20 ,29 C 4,52 15,90 50,90 85,90 100,47 74,20"></path> </g> <path style="fill:#ffffff;" d="m 2,21 29,-2 2,29"></path> </g></svg></div></div>',
					description: '<div style="text-align: center;">Натисніть, щоб перезавантажити Lampa</div>',
	},
onRender: function (item) {
item.on('hover:enter', function(){
location.reload();
});
}
		}); */
/* Реклама */
Lampa.SettingsApi.addParam({
					component: 'add_plugin',
					param: {
						name: 'add_ads',
      		type: 'title'
                        		},
					field: {
name: ads
},
onRender: function (item) {
setTimeout(function() {
// $('.settings-param-title').insertBefore($('.settings-param').first())
$('.settings-param-title').insertAfter($('.settings-param').last())
},0);
}
	
});	
} // /* addonStart */
if (!!window.appready) addonStart();
else Lampa.Listener.follow('app', function(e){if (e.type === 'ready') addonStart()});	
	
})();
