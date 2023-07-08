import { Main } from "@layouts";

function Dashboard() {
  return (
    <Main>
      <div className="d-flex flex-column flex-column-fluid">
        {/*begin::Toolbar*/}
        <div className=" py-3 py-lg-6">
          {/*begin::Toolbar container*/}
          <div className="app-container container-fluid d-flex flex-stack">
            {/*begin::Page title*/}
            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
              {/*begin::Title*/}
              <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Dashboard</h1>
              {/*end::Title*/}
            </div>
            {/*end::Page title*/}
            {/*begin::Actions*/}
            <div className="d-flex align-items-center gap-2 gap-lg-3">
              {/*begin::Filter menu*/}
              <div className="m-0">
                {/*begin::Menu toggle*/}
                <a href="#" className="btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-bold">
                  Filter
                </a>
                {/*end::Menu toggle*/}
              </div>
              {/*end::Filter menu*/}

              {/*begin::Primary button*/}
              <a href="#" className="btn btn-sm fw-bold btn-primary">
                Create
              </a>
              {/*end::Primary button*/}
            </div>
            {/*end::Actions*/}
          </div>
          {/*end::Toolbar container*/}
        </div>
        {/*end::Toolbar*/}

        {/*begin::Content*/}
        <div className="app-content flex-column-fluid">
          {/*begin::Content container*/}
          <div className="app-container container-fluid">
            {/*begin::Row*/}

            <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
              {/*begin::Col*/}

              <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10">
                {/*begin::Card widget 20*/}
                <div
                  className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end mb-5 mb-xl-10"
                  style={{
                    backgroundColor: "#F1416C",
                    backgroundImage: 'url("/bg/bg-patern.png")',
                  }}
                >
                  {/*begin::Header*/}
                  <div className="card-header pt-5">
                    {/*begin::Title*/}
                    <div className="card-title d-flex flex-column">
                      {/*begin::Amount*/}
                      <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">69</span>
                      {/*end::Amount*/}
                      {/*begin::Subtitle*/}
                      <span className="text-white opacity-75 pt-1 fw-semibold fs-6">Active Projects</span>
                      {/*end::Subtitle*/}
                    </div>
                    {/*end::Title*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Card body*/}
                  <div className="card-body d-flex align-items-end pt-0">
                    {/*begin::Progress*/}
                    <div className="d-flex align-items-center flex-column mt-3 w-100">
                      <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                        <span>43 Pending</span>
                        <span>72%</span>
                      </div>
                      <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                        <div className="bg-white rounded h-8px" role="progressbar" style={{ width: "72%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    {/*end::Progress*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card widget 20*/}
              </div>
              {/*end::Col*/}

              {/*begin::Col*/}
              <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10">
                {/*begin::Card widget 17*/}
                <div className="card card-flush mb-5 mb-xl-10">
                  {/*begin::Header*/}
                  <div className="card-header pt-5">
                    {/*begin::Title*/}
                    <div className="card-title d-flex flex-column">
                      {/*begin::Info*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Currency*/}
                        <span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">$</span>
                        {/*end::Currency*/}
                        {/*begin::Amount*/}
                        <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">69,700</span>
                        {/*end::Amount*/}
                        {/*begin::Badge*/}
                        <span className="badge badge-light-success fs-base">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                          <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                              <path
                                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}2.2%
                        </span>
                        {/*end::Badge*/}
                      </div>
                      {/*end::Info*/}
                      {/*begin::Subtitle*/}
                      <span className="text-gray-400 pt-1 fw-semibold fs-6">Projects Earnings in April</span>
                      {/*end::Subtitle*/}
                    </div>
                    {/*end::Title*/}
                  </div>
                  {/*end::Header*/}

                  {/*begin::Card body*/}
                  <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                    {/*begin::Chart*/}
                    <div className="d-flex flex-center me-5 pt-2">
                      <div id="kt_card_widget_17_chart" style={{ minWidth: "70px", minHeight: "70px" }} data-kt-size={70} data-kt-line={11} />
                    </div>
                    {/*end::Chart*/}
                    {/*begin::Labels*/}
                    <div className="d-flex flex-column content-justify-center flex-row-fluid">
                      {/*begin::Label*/}
                      <div className="d-flex fw-semibold align-items-center">
                        {/*begin::Bullet*/}
                        <div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <div className="text-gray-500 flex-grow-1 me-4">Leaf CRM</div>
                        {/*end::Label*/}
                        {/*begin::Stats*/}
                        <div className="fw-bolder text-gray-700 text-xxl-end">$7,660</div>
                        {/*end::Stats*/}
                      </div>
                      {/*end::Label*/}
                      {/*begin::Label*/}
                      <div className="d-flex fw-semibold align-items-center my-3">
                        {/*begin::Bullet*/}
                        <div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <div className="text-gray-500 flex-grow-1 me-4">Mivy App</div>
                        {/*end::Label*/}
                        {/*begin::Stats*/}
                        <div className="fw-bolder text-gray-700 text-xxl-end">$2,820</div>
                        {/*end::Stats*/}
                      </div>
                      {/*end::Label*/}
                      {/*begin::Label*/}
                      <div className="d-flex fw-semibold align-items-center">
                        {/*begin::Bullet*/}
                        <div className="bullet w-8px h-3px rounded-2 me-3" style={{ backgroundColor: "#E4E6EF" }} />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <div className="text-gray-500 flex-grow-1 me-4">Others</div>
                        {/*end::Label*/}
                        {/*begin::Stats*/}
                        <div className="fw-bolder text-gray-700 text-xxl-end">$45,257</div>
                        {/*end::Stats*/}
                      </div>
                      {/*end::Label*/}
                    </div>
                    {/*end::Labels*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card widget 17*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}

            {/*begin::Row*/}
            <div className="row gx-5 gx-xl-10">
              {/*begin::Col*/}
              <div className="col-xxl-12 col-lg-12 mb-5 mb-xl-10">
                {/*begin::Chart widget 8*/}
                <div className="card card-flush h-xl-100">
                  {/*begin::Header*/}
                  <div className="card-header pt-5">
                    {/*begin::Title*/}
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label fw-bold text-dark">Performance Overview</span>
                      <span className="text-gray-400 mt-1 fw-semibold fs-6">Users from all channels</span>
                    </h3>
                    {/*end::Title*/}
                    {/*begin::Toolbar*/}
                    <div className="card-toolbar">
                      <ul className="nav" id="kt_chart_widget_8_tabs">
                        <li className="nav-item">
                          <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1" data-bs-toggle="tab" id="kt_chart_widget_8_week_toggle" href="#kt_chart_widget_8_week_tab">
                            Month
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1 active" data-bs-toggle="tab" id="kt_chart_widget_8_month_toggle" href="#kt_chart_widget_8_month_tab">
                            Week
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*end::Toolbar*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body pt-6">
                    {/*begin::Tab content*/}
                    <div className="tab-content">
                      {/*begin::Tab pane*/}
                      <div className="tab-pane fade" id="kt_chart_widget_8_week_tab" role="tabpanel">
                        {/*begin::Statistics*/}
                        <div className="mb-5">
                          {/*begin::Statistics*/}
                          <div className="d-flex align-items-center mb-2">
                            <span className="fs-1 fw-semibold text-gray-400 me-1 mt-n1">$</span>
                            <span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">18,89</span>
                            <span className="badge badge-light-success fs-base">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                              <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                  <path
                                    d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}4,8%
                            </span>
                          </div>
                          {/*end::Statistics*/}
                          {/*begin::Description*/}
                          <span className="fs-6 fw-semibold text-gray-400">Avarage cost per interaction</span>
                          {/*end::Description*/}
                        </div>
                        {/*end::Statistics*/}
                        {/*begin::Chart*/}
                        <div id="kt_chart_widget_8_week_chart" className="ms-n5 min-h-auto" style={{ height: "275px" }} />
                        {/*end::Chart*/}
                        {/*begin::Items*/}
                        <div className="d-flex flex-wrap pt-5">
                          {/*begin::Item*/}
                          <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-3 mb-sm-6">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">Social Campaigns</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-danger me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-<gray-600 fs-6">Google Ads</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                          </div>
                          {/*ed::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-3 mb-sm-6">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">Email Newsletter</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-warning me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">Courses</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                          </div>
                          {/*ed::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-column pt-sm-3 pt-6">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-3 mb-sm-6">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-info me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">TV Campaign</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">Radio</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                          </div>
                          {/*ed::Item*/}
                        </div>
                        {/*ed::Items*/}
                      </div>
                      {/*end::Tab pane*/}
                      {/*begin::Tab pane*/}
                      <div className="tab-pane fade active show" id="kt_chart_widget_8_month_tab" role="tabpanel">
                        {/*begin::Statistics*/}
                        <div className="mb-5">
                          {/*begin::Statistics*/}
                          <div className="d-flex align-items-center mb-2">
                            <span className="fs-1 fw-semibold text-gray-400 me-1 mt-n1">$</span>
                            <span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">8,55</span>
                            <span className="badge badge-light-success fs-base">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                              <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                  <path
                                    d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}2.2%
                            </span>
                          </div>
                          {/*end::Statistics*/}
                          {/*begin::Description*/}
                          <span className="fs-6 fw-semibold text-gray-400">Avarage cost per interaction</span>
                          {/*end::Description*/}
                        </div>
                        {/*end::Statistics*/}
                        {/*begin::Chart*/}
                        <div id="kt_chart_widget_8_month_chart" className="ms-n5 min-h-auto" style={{ height: "275px" }} />
                        {/*end::Chart*/}
                        {/*begin::Items*/}
                        <div className="d-flex flex-wrap pt-5">
                          {/*begin::Item*/}
                          <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-3 mb-sm-6">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">Social Campaigns</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-danger me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">Google Ads</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                          </div>
                          {/*ed::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-3 mb-sm-6">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">Email Newsletter</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-warning me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">Courses</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                          </div>
                          {/*ed::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-column pt-sm-3 pt-6">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-3 mb-sm-6">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-info me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">TV Campaign</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Bullet*/}
                              <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                              {/*end::Bullet*/}
                              {/*begin::Label*/}
                              <span className="fw-bold text-gray-600 fs-6">Radio</span>
                              {/*end::Label*/}
                            </div>
                            {/*ed::Item*/}
                          </div>
                          {/*ed::Item*/}
                        </div>
                        {/*ed::Items*/}
                      </div>
                      {/*end::Tab pane*/}
                    </div>
                    {/*end::Tab content*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Chart widget 8*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}

            {/*begin::Row*/}
            <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
              {/*begin::Col*/}
              <div className="col-xxl-12 col-lg-12 col-md-12">
                {/*begin::Card widget 18*/}
                <div className="card card-flush h-xl-100">
                  {/*begin::Body*/}
                  <div className="card-body py-9">
                    {/*begin::Row*/}
                    <div className="row gx-9 h-100">
                      {/*begin::Col*/}
                      <div className="col-sm-6 mb-10 mb-sm-0">
                        {/*begin::Image*/}
                        <div
                          className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-400px min-h-sm-100 h-100"
                          style={{
                            backgroundSize: "100% 100%",
                            backgroundImage: 'url("assets/media/stock/600x600/img-65.jpg")',
                          }}
                        />
                        {/*end::Image*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-sm-6">
                        {/*begin::Wrapper*/}
                        <div className="d-flex flex-column h-100">
                          {/*begin::Header*/}
                          <div className="mb-7">
                            {/*begin::Headin*/}
                            <div className="d-flex flex-stack mb-6">
                              {/*begin::Title*/}
                              <div className="flex-shrink-0 me-5">
                                <span className="text-gray-400 fs-7 fw-bold me-2 d-block lh-1 pb-1">Featured</span>
                                <span className="text-gray-800 fs-1 fw-bold">9 Degree</span>
                              </div>
                              {/*end::Title*/}
                              <span className="badge badge-light-primary flex-shrink-0 align-self-center py-3 px-4 fs-7">In Process</span>
                            </div>
                            {/*end::Heading*/}
                            {/*begin::Items*/}
                            <div className="d-flex align-items-center flex-wrap d-grid gap-2">
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center me-5 me-xl-13">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-30px symbol-circle me-3">
                                  <img src="assets/media/avatars/300-3.jpg" className alt="" />
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Info*/}
                                <div className="m-0">
                                  <span className="fw-semibold text-gray-400 d-block fs-8">Manager</span>
                                  <a href="../../demo1/dist/pages/user-profile/overview.html" className="fw-bold text-gray-800 text-hover-primary fs-7">
                                    Robert Fox
                                  </a>
                                </div>
                                {/*end::Info*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Symbol*/}
                                <div className="symbol symbol-30px symbol-circle me-3">
                                  <span className="symbol-label bg-success">
                                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-white">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z"
                                          fill="currentColor"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </span>
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Info*/}
                                <div className="m-0">
                                  <span className="fw-semibold text-gray-400 d-block fs-8">Budget</span>
                                  <span className="fw-bold text-gray-800 fs-7">$64.800</span>
                                </div>
                                {/*end::Info*/}
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Items*/}
                          </div>
                          {/*end::Header*/}
                          {/*begin::Body*/}
                          <div className="mb-6">
                            {/*begin::Text*/}
                            <span className="fw-semibold text-gray-600 fs-6 mb-8 d-block">Flat cartoony illustrations with vivid unblended colors and asymmetrical beautiful purple hair lady</span>
                            {/*end::Text*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Stat*/}
                              <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 me-6 mb-3">
                                {/*begin::Date*/}
                                <span className="fs-6 text-gray-700 fw-bold">Feb 6, 2021</span>
                                {/*end::Date*/}
                                {/*begin::Label*/}
                                <div className="fw-semibold text-gray-400">Due Date</div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Stat*/}
                              {/*begin::Stat*/}
                              <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 mb-3">
                                {/*begin::Number*/}
                                <span className="fs-6 text-gray-700 fw-bold">
                                  $
                                  <span className="ms-n1" data-kt-countup="true" data-kt-countup-value="284,900.00">
                                    0
                                  </span>
                                </span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="fw-semibold text-gray-400">Budget</div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Stat*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Body*/}
                          {/*begin::Footer*/}
                          <div className="d-flex flex-stack mt-auto bd-highlight">
                            {/*begin::Users group*/}
                            <div className="symbol-group symbol-hover flex-nowrap">
                              <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                              </div>
                              <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                                <img alt="Pic" src="assets/media/avatars/300-3.jpg" />
                              </div>
                              <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                              </div>
                            </div>
                            {/*end::Users group*/}
                            {/*begin::Actions*/}
                            <a href="../../demo1/dist/apps/projects/project.html" className="text-primary opacity-75-hover fs-6 fw-semibold">
                              View Project
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr095.svg*/}
                              <span className="svg-icon svg-icon-4 svg-icon-gray-800 ms-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    opacity="0.3"
                                    d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
                                    fill="currentColor"
                                  />
                                  <rect x="21.9497" y="3.46448" width={13} height={2} rx={1} transform="rotate(135 21.9497 3.46448)" fill="currentColor" />
                                  <path
                                    d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Footer*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Card widget 18*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}

            {/*begin::Row*/}
            <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
              {/*begin::Col*/}
              <div className="col-xl-4">
                {/*begin::Chart Widget 35*/}
                <div className="card card-flush h-md-100">
                  {/*begin::Header*/}
                  <div className="card-header pt-5 mb-6">
                    {/*begin::Title*/}
                    <h3 className="card-title align-items-start flex-column">
                      {/*begin::Statistics*/}
                      <div className="d-flex align-items-center mb-2">
                        {/*begin::Currency*/}
                        <span className="fs-3 fw-semibold text-gray-400 align-self-start me-1">$</span>
                        {/*end::Currency*/}
                        {/*begin::Value*/}
                        <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">3,274.94</span>
                        {/*end::Value*/}
                        {/*begin::Label*/}
                        <span className="badge badge-light-success fs-base">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                          <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                              <path
                                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}9.2%
                        </span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Statistics*/}
                      {/*begin::Description*/}
                      <span className="fs-6 fw-semibold text-gray-400">Avg. Agent Earnings</span>
                      {/*end::Description*/}
                    </h3>
                    {/*end::Title*/}
                    {/*begin::Toolbar*/}
                    <div className="card-toolbar">
                      {/*begin::Menu*/}
                      <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                            <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                            <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                            <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </button>
                      {/*begin::Menu 2*/}
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu separator*/}
                        <div className="separator mb-3 opacity-75" />
                        {/*end::Menu separator*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Ticket
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Customer
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                          {/*begin::Menu item*/}
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">New Group</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*end::Menu item*/}
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Admin Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Staff Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Member Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Contact
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu separator*/}
                        <div className="separator mt-3 opacity-75" />
                        {/*end::Menu separator*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <div className="menu-content px-3 py-3">
                            <a className="btn btn-primary btn-sm px-4" href="#">
                              Generate Reports
                            </a>
                          </div>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 2*/}
                      {/*end::Menu*/}
                    </div>
                    {/*end::Toolbar*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body py-0 px-0">
                    {/*begin::Nav*/}
                    <ul className="nav d-flex justify-content-between mb-3 mx-9">
                      {/*begin::Item*/}
                      <li className="nav-item mb-3">
                        {/*begin::Link*/}
                        <a
                          className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px active"
                          data-bs-toggle="tab"
                          id="kt_charts_widget_35_tab_1"
                          href="#kt_charts_widget_35_tab_content_1"
                        >
                          1d
                        </a>
                        {/*end::Link*/}
                      </li>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <li className="nav-item mb-3">
                        {/*begin::Link*/}
                        <a
                          className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px"
                          data-bs-toggle="tab"
                          id="kt_charts_widget_35_tab_2"
                          href="#kt_charts_widget_35_tab_content_2"
                        >
                          5d
                        </a>
                        {/*end::Link*/}
                      </li>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <li className="nav-item mb-3">
                        {/*begin::Link*/}
                        <a
                          className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px"
                          data-bs-toggle="tab"
                          id="kt_charts_widget_35_tab_3"
                          href="#kt_charts_widget_35_tab_content_3"
                        >
                          1m
                        </a>
                        {/*end::Link*/}
                      </li>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <li className="nav-item mb-3">
                        {/*begin::Link*/}
                        <a
                          className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px"
                          data-bs-toggle="tab"
                          id="kt_charts_widget_35_tab_4"
                          href="#kt_charts_widget_35_tab_content_4"
                        >
                          6m
                        </a>
                        {/*end::Link*/}
                      </li>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <li className="nav-item mb-3">
                        {/*begin::Link*/}
                        <a
                          className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px"
                          data-bs-toggle="tab"
                          id="kt_charts_widget_35_tab_5"
                          href="#kt_charts_widget_35_tab_content_5"
                        >
                          1y
                        </a>
                        {/*end::Link*/}
                      </li>
                      {/*end::Item*/}
                    </ul>
                    {/*end::Nav*/}
                    {/*begin::Tab Content*/}
                    <div className="tab-content mt-n6">
                      {/*begin::Tap pane*/}
                      <div className="tab-pane fade active show" id="kt_charts_widget_35_tab_content_1">
                        {/*begin::Chart*/}
                        <div id="kt_charts_widget_35_chart_1" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                        {/*end::Chart*/}
                        {/*begin::Table container*/}
                        <div className="table-responsive mx-9 mt-n6">
                          {/*begin::Table*/}
                          <table className="table align-middle gs-0 gy-4">
                            {/*begin::Table head*/}
                            <thead>
                              <tr>
                                <th className="min-w-100px" />
                                <th className="min-w-100px text-end pe-0" />
                                <th className="text-end min-w-50px" />
                              </tr>
                            </thead>
                            {/*end::Table head*/}
                            {/*begin::Table body*/}
                            <tbody>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    2:30 PM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-danger">-139.34</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    3:10 PM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$3,207.03</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-success">+576.24</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    3:55 PM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$3,274.94</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-success">+124.03</span>
                                </td>
                              </tr>
                            </tbody>
                            {/*end::Table body*/}
                          </table>
                          {/*end::Table*/}
                        </div>
                        {/*end::Table container*/}
                      </div>
                      {/*end::Tap pane*/}

                      {/*begin::Tap pane*/}
                      <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_2">
                        {/*begin::Chart*/}
                        <div id="kt_charts_widget_35_chart_2" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                        {/*end::Chart*/}
                        {/*begin::Table container*/}
                        <div className="table-responsive mx-9 mt-n6">
                          {/*begin::Table*/}
                          <table className="table align-middle gs-0 gy-4">
                            {/*begin::Table head*/}
                            <thead>
                              <tr>
                                <th className="min-w-100px" />
                                <th className="min-w-100px text-end pe-0" />
                                <th className="text-end min-w-50px" />
                              </tr>
                            </thead>
                            {/*end::Table head*/}
                            {/*begin::Table body*/}
                            <tbody>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    4:30 PM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$2,345.45</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-success">+134.02</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    11:35 AM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-primary">-124.03</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    3:30 PM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$1,756.26</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-danger">+144.04</span>
                                </td>
                              </tr>
                            </tbody>
                            {/*end::Table body*/}
                          </table>
                          {/*end::Table*/}
                        </div>
                        {/*end::Table container*/}
                      </div>
                      {/*end::Tap pane*/}
                      {/*begin::Tap pane*/}
                      <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_3">
                        {/*begin::Chart*/}
                        <div id="kt_charts_widget_35_chart_3" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                        {/*end::Chart*/}
                        {/*begin::Table container*/}
                        <div className="table-responsive mx-9 mt-n6">
                          {/*begin::Table*/}
                          <table className="table align-middle gs-0 gy-4">
                            {/*begin::Table head*/}
                            <thead>
                              <tr>
                                <th className="min-w-100px" />
                                <th className="min-w-100px text-end pe-0" />
                                <th className="text-end min-w-50px" />
                              </tr>
                            </thead>
                            {/*end::Table head*/}
                            {/*begin::Table body*/}
                            <tbody>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    3:20 AM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$3,756.26</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-primary">+185.03</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    12:30 AM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-danger">+124.03</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    4:30 PM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-success">-154.03</span>
                                </td>
                              </tr>
                            </tbody>
                            {/*end::Table body*/}
                          </table>
                          {/*end::Table*/}
                        </div>
                        {/*end::Table container*/}
                      </div>
                      {/*end::Tap pane*/}
                      {/*begin::Tap pane*/}
                      <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_4">
                        {/*begin::Chart*/}
                        <div id="kt_charts_widget_35_chart_4" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                        {/*end::Chart*/}
                        {/*begin::Table container*/}
                        <div className="table-responsive mx-9 mt-n6">
                          {/*begin::Table*/}
                          <table className="table align-middle gs-0 gy-4">
                            {/*begin::Table head*/}
                            <thead>
                              <tr>
                                <th className="min-w-100px" />
                                <th className="min-w-100px text-end pe-0" />
                                <th className="text-end min-w-50px" />
                              </tr>
                            </thead>
                            {/*end::Table head*/}
                            {/*begin::Table body*/}
                            <tbody>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    2:30 PM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-warning">+124.03</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    5:30 AM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$1,756.26</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-info">+144.65</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    4:30 PM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$2,085.25</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-primary">+154.06</span>
                                </td>
                              </tr>
                            </tbody>
                            {/*end::Table body*/}
                          </table>
                          {/*end::Table*/}
                        </div>
                        {/*end::Table container*/}
                      </div>
                      {/*end::Tap pane*/}
                      {/*begin::Tap pane*/}
                      <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_5">
                        {/*begin::Chart*/}
                        <div id="kt_charts_widget_35_chart_5" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                        {/*end::Chart*/}
                        {/*begin::Table container*/}
                        <div className="table-responsive mx-9 mt-n6">
                          {/*begin::Table*/}
                          <table className="table align-middle gs-0 gy-4">
                            {/*begin::Table head*/}
                            <thead>
                              <tr>
                                <th className="min-w-100px" />
                                <th className="min-w-100px text-end pe-0" />
                                <th className="text-end min-w-50px" />
                              </tr>
                            </thead>
                            {/*end::Table head*/}
                            {/*begin::Table body*/}
                            <tbody>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    2:30 PM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$2,045.04</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-warning">+114.03</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    3:30 AM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-primary">-124.03</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <a href="#" className="text-gray-600 fw-bold fs-6">
                                    10:30 PM
                                  </a>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="text-gray-800 fw-bold fs-6 me-1">$1.756.26</span>
                                </td>
                                <td className="pe-0 text-end">
                                  <span className="fw-bold fs-6 text-info">+165.86</span>
                                </td>
                              </tr>
                            </tbody>
                            {/*end::Table body*/}
                          </table>
                          {/*end::Table*/}
                        </div>
                        {/*end::Table container*/}
                      </div>
                      {/*end::Tap pane*/}
                    </div>
                    {/*end::Tab Content*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Chart Widget 35*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-xl-8">
                {/*begin::Table widget 14*/}
                <div className="card card-flush h-md-100">
                  {/*begin::Header*/}
                  <div className="card-header pt-7">
                    {/*begin::Title*/}
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label fw-bold text-gray-800">Projects Stats</span>
                      <span className="text-gray-400 mt-1 fw-semibold fs-6">Updated 37 minutes ago</span>
                    </h3>
                    {/*end::Title*/}
                    {/*begin::Toolbar*/}
                    <div className="card-toolbar">
                      <a href="../../demo1/dist/apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">
                        History
                      </a>
                    </div>
                    {/*end::Toolbar*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Body*/}
                  <div className="card-body pt-6">
                    {/*begin::Table container*/}
                    <div className="table-responsive">
                      {/*begin::Table*/}
                      <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                        {/*begin::Table head*/}
                        <thead>
                          <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                            <th className="p-0 pb-3 min-w-175px text-start">ITEM</th>
                            <th className="p-0 pb-3 min-w-100px text-end">BUDGET</th>
                            <th className="p-0 pb-3 min-w-100px text-end">PROGRESS</th>
                            <th className="p-0 pb-3 min-w-175px text-end pe-12">STATUS</th>
                            <th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                            <th className="p-0 pb-3 w-50px text-end">VIEW</th>
                          </tr>
                        </thead>
                        {/*end::Table head*/}
                        {/*begin::Table body*/}
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-50px me-3">
                                  <img src="assets/media/stock/600x600/img-49.jpg" className alt="" />
                                </div>
                                <div className="d-flex justify-content-start flex-column">
                                  <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                                    Mivy App
                                  </a>
                                  <span className="text-gray-400 fw-semibold d-block fs-7">Jane Cooper</span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end pe-0">
                              <span className="text-gray-600 fw-bold fs-6">$32,400</span>
                            </td>
                            <td className="text-end pe-0">
                              {/*begin::Label*/}
                              <span className="badge badge-light-success fs-base">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                    <path
                                      d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}9.2%
                              </span>
                              {/*end::Label*/}
                            </td>
                            <td className="text-end pe-12">
                              <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                            </td>
                            <td className="text-end pe-0">
                              <div id="kt_table_widget_14_chart_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-50px me-3">
                                  <img src="assets/media/stock/600x600/img-40.jpg" className alt="" />
                                </div>
                                <div className="d-flex justify-content-start flex-column">
                                  <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                                    Avionica
                                  </a>
                                  <span className="text-gray-400 fw-semibold d-block fs-7">Esther Howard</span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end pe-0">
                              <span className="text-gray-600 fw-bold fs-6">$256,910</span>
                            </td>
                            <td className="text-end pe-0">
                              {/*begin::Label*/}
                              <span className="badge badge-light-danger fs-base">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                <span className="svg-icon svg-icon-5 svg-icon-danger ms-n1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                    <path
                                      d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}0.4%
                              </span>
                              {/*end::Label*/}
                            </td>
                            <td className="text-end pe-12">
                              <span className="badge py-3 px-4 fs-7 badge-light-warning">On Hold</span>
                            </td>
                            <td className="text-end pe-0">
                              <div id="kt_table_widget_14_chart_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-50px me-3">
                                  <img src="assets/media/stock/600x600/img-39.jpg" className alt="" />
                                </div>
                                <div className="d-flex justify-content-start flex-column">
                                  <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                                    Charto CRM
                                  </a>
                                  <span className="text-gray-400 fw-semibold d-block fs-7">Jenny Wilson</span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end pe-0">
                              <span className="text-gray-600 fw-bold fs-6">$8,220</span>
                            </td>
                            <td className="text-end pe-0">
                              {/*begin::Label*/}
                              <span className="badge badge-light-success fs-base">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                    <path
                                      d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}9.2%
                              </span>
                              {/*end::Label*/}
                            </td>
                            <td className="text-end pe-12">
                              <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                            </td>
                            <td className="text-end pe-0">
                              <div id="kt_table_widget_14_chart_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-50px me-3">
                                  <img src="assets/media/stock/600x600/img-47.jpg" className alt="" />
                                </div>
                                <div className="d-flex justify-content-start flex-column">
                                  <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                                    Tower Hill
                                  </a>
                                  <span className="text-gray-400 fw-semibold d-block fs-7">Cody Fisher</span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end pe-0">
                              <span className="text-gray-600 fw-bold fs-6">$74,000</span>
                            </td>
                            <td className="text-end pe-0">
                              {/*begin::Label*/}
                              <span className="badge badge-light-success fs-base">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                    <path
                                      d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}9.2%
                              </span>
                              {/*end::Label*/}
                            </td>
                            <td className="text-end pe-12">
                              <span className="badge py-3 px-4 fs-7 badge-light-success">Complated</span>
                            </td>
                            <td className="text-end pe-0">
                              <div id="kt_table_widget_14_chart_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-50px me-3">
                                  <img src="assets/media/stock/600x600/img-48.jpg" className alt="" />
                                </div>
                                <div className="d-flex justify-content-start flex-column">
                                  <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                                    9 Degree
                                  </a>
                                  <span className="text-gray-400 fw-semibold d-block fs-7">Savannah Nguyen</span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end pe-0">
                              <span className="text-gray-600 fw-bold fs-6">$183,300</span>
                            </td>
                            <td className="text-end pe-0">
                              {/*begin::Label*/}
                              <span className="badge badge-light-danger fs-base">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                <span className="svg-icon svg-icon-5 svg-icon-danger ms-n1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                    <path
                                      d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}0.4%
                              </span>
                              {/*end::Label*/}
                            </td>
                            <td className="text-end pe-12">
                              <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                            </td>
                            <td className="text-end pe-0">
                              <div id="kt_table_widget_14_chart_5" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                        {/*end::Table body*/}
                      </table>
                    </div>
                    {/*end::Table*/}
                  </div>
                  {/*end: Card Body*/}
                </div>
                {/*end::Table widget 14*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Content container*/}
        </div>
        {/*end::Content*/}
      </div>
    </Main>
  );
}

export default Dashboard;
