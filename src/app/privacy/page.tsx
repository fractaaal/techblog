// プライバシーポリシーのpage.tsxを作成

export default function Privacy() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between pb-10 px-4 text-xs lg:text-sm'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold'>プライバシーポリシー</h1>
      </div>
      <div className='flex flex-col items-start justify-start'>
        <h2 className='text-xl font-bold mt-6'>1. 個人情報の利用目的</h2>
        <p className='text-gray-500'>
          当ブログでは、メールでのお問い合わせの際に、メールアドレスを入力していただく場合がございます。
          <br />
          その際には、お問い合わせに対する返信のために利用させていただくものであり、それ以外の目的では利用いたしません。
        </p>
        <h2 className='text-xl font-bold mt-6'>2. 個人情報の第三者への開示</h2>
        <p className='text-gray-500'>
          当ブログでは、お問い合わせに対する返信のためにメールアドレスを利用いたしますが、
          <br />
          これを第三者に開示することはありません。
        </p>
        <h2 className='text-xl font-bold mt-6'>3. 個人情報の開示、訂正、追加、削除、利用停止</h2>
        <p className='text-gray-500'>
          お問い合わせいただいた方がご自身の個人情報の開示、訂正、追加、削除、利用停止をご希望される場合には、
          <br />
          ご本人であることを確認させていただいた上、速やかに対応させ ていただきます。
        </p>
        <h2 className='text-xl font-bold mt-6'>4. アクセス解析ツールについて</h2>
        <p className='text-gray-500'>
          当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
          <br />
          このGoogleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。
          <br />
          このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
          <br />
          この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
          <br />
          この規約に関して、詳しくは
          <a
            href='https://marketingplatform.google.com/about/analytics/terms/jp/'
            className='text-blue-500 hover:underline'
          >
            こちら
          </a>
          をクリックしてください。
        </p>
        <h2 className='text-xl font-bold mt-6'>5. 免責事項</h2>
        <p className='text-gray-500'>
          当ブログのコンテンツや情報において、可能な限り正確な情報を掲載するよう努めていますが、
          <br />
          誤情報が入り込んだり、情報が古くなっていることもございます。
          <br />
          当ブログのコンテンツや情報に基づく判断で、いかなる損失や損害などの被害が発生することがあっても、
          <br />
          当ブログ管理人は一切の責任を負いかねます。
        </p>
        <h2 className='text-xl font-bold mt-6'>6. 著作権について</h2>
        <p className='text-gray-500'>
          当ブログのコンテンツや情報の著作権は、当ブログ管理人に帰属しています。
          <br />
          当ブログのコンテンツや情報を引用する場合は、当ブログへのリンクを掲載することによって引用可能とします。
        </p>
      </div>
    </div>
  )
}
