
//获取服务商信息
const getProvider = () => {
    const promise = new Promise((resolve, reject) => {
        uni.getProvider({
            service: 'oauth', //服务类型  登录授权
            success: function (res) {
                resolve(res.provider)
            },
            fail(res) {
                reject(res)
            }
        });
    }).catch(res => {
        uni.showToast({
            icon: 'none',
            title: res.errMsg || '获取服务商信息失败',
            duration: 2000
        });
    })

    return promise
}

//获取code
const getCode = (provider) => {
    if (!provider) {
        uni.showToast({
            icon: 'none',
            title: '获取服务商信息失败',
            duration: 2000
        });
        return
    }

    const promise = new Promise((resolve, reject) => {
        uni.login({
            provider: provider,
            success: function (loginRes) {
                if (loginRes && loginRes.code) {
                    resolve(loginRes.code)
                } else {
                    reject(loginRes)
                }
            }
        });
    }).catch(res => {
        uni.showToast({
            icon: 'none',
            title: res.errMsg || '获取code失败',
            duration: 2000
        });
    })

    return promise
}


//验证授权状态 2未操作 1已经授权  0拒绝授权
const getSetting = () => {
    const promise = new Promise((resolve, reject) => {
        uni.getSetting({
            success(res) {
              console.log(res,'res')
                let authSetting = res.authSetting
                //授权成功
                if (authSetting['scope.userInfo']) {
                    resolve(1)
                    return
                }
                //拒绝授权
                if (authSetting['scope.userInfo'] === false) {
                    resolve(0)
                    return
                }
                resolve(2)
            },
            fail(res) {
                console.log(111)

                reject(res)
            }
        })
    }).catch(res => {
        uni.showToast({
            icon: 'none',
            title: res.errMsg || '获取授权状态失败',
            duration: 2000
        })
    })

    return promise
}
//跳转至小程序登录页
const toLogin = () => {
    setTimeout(() => {
        uni.redirectTo({
            url: '/pages/main/login/login'
        });
    }, 2000)
}
export {getProvider,  getCode, getSetting}
